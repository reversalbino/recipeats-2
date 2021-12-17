window.addEventListener("load", (event)=>{
    console.log("hello from reviews!")
//test

    const deleteButtons = document.querySelectorAll('#deleteButton')
    const editButtons = document.querySelectorAll('#editButton');
    const submitButton = document.querySelector('#submitReviewButton');

    submitButton.addEventListener('click', async(e) => {
        e.preventDefault()
        e.stopPropagation()
        const reviewForm = document.querySelector('#submitReviewForm');
        const formData = new FormData(reviewForm);
        console.log('-------form data-------', formData)
        const recipeId = e.target.value
        const reviewText = formData.get('reviewbody');
        // reviewForm.reset();

        // // const storedComments = JSON.parse(localStorage.comments);
        // // storedComments.push(commentText);
        // // localStorage.comments = JSON.stringify(storedComments);

        // // const review = createComment(reviewText);

        // // const reviews = document.querySelector(".comments");
        // reviewForm.appendChild(reviewText);

        const res = await fetch(`/recipes/${recipeId}/review/add`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({reviewbody: reviewText})
        });

        localStorage.clear();

        const data = await res.json()

        if (data.message === "Success") {
            const review = document.querySelector(`.red`)
            console.log('------------REVIEW------------', review)
            const tr = document.createElement('tr')
            // tr.classList.add('reviewRow-${review.id}')
            // tr.setAttribute('id', '${review.userId}')
            const td = document.createElement('td')
            const td2 = document.createElement('td')
            td.appendChild(document.createTextNode(data.userId))
            td2.appendChild(document.createTextNode(reviewText))
            tr.appendChild(td)
            tr.appendChild(td2)
            review.appendChild(tr)
        }
    })


    for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i];
        button.addEventListener('click', async(e) => {
            e.preventDefault()
            const reviewId = e.target.value
            const res = await fetch(`/recipes/reviews/${reviewId}/delete`, {
                method: 'DELETE'
            })

            const data = await res.json()
            // console.log(data)
            if (data.message === "Success") {
                const review = document.querySelector(`.reviewRow-${reviewId}`)
                review.remove()
            }
        })
    }

    for (let i = 0; i < editButtons.length; i++) {
        const button = editButtons[i];
        button.addEventListener('click', async(e) => {
            e.preventDefault();
            e.stopPropagation();

            const reviewId = e.target.value;
            const reviewText = document.querySelector(`.reviewText-${reviewId}`)

            reviewText.contentEditable == 'true' ? reviewText.contentEditable = 'false' : reviewText.contentEditable = 'true';

            if(reviewText.contentEditable === 'false') {
                localStorage.setItem('reviewText', reviewText.innerText);
            }

            // reviewText.addEventListener('keystroke', async(e) => {

            //     console.log('keystroke', reviewText.innerText)
            // })
            //reviewText.setAttribute('contenteditable', 'true');
            const res = await fetch(`/recipes/reviews/${reviewId}/edit`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({theReviewText: localStorage.getItem('reviewText')})
            });

            localStorage.clear();

            const data = await res.json()

            if (data.message === "Success") {
                const review = document.querySelector(`.reviewRow-${reviewId}`)
            }
        }
        )}
    });
