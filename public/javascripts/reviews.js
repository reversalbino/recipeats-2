window.addEventListener("load", (event) => {
    //test

    const deleteButtons = document.querySelectorAll('#deleteButton')
    const editButtons = document.querySelectorAll('#editButton');
    let submitButton = document.querySelector('#submitReviewButton');

    let url = window.location.pathname;
    const urlParts = url.split('/');
    const recipeIdFromURL = urlParts[2];



    if (submitButton) {
        submitButton.addEventListener('click', async (e) => {

            e.preventDefault()
            e.stopPropagation()
            const reviewForm = document.querySelector('#submitReviewForm');
            const formData = new FormData(reviewForm);
            const recipeId = e.target.value
            const reviewText = formData.get('reviewbody');
            // reviewForm.reset();

            // // const storedComments = JSON.parse(localStorage.comments);
            // // storedComments.push(commentText);
            // localStorage.comments = JSON.stringify(storedComments);

            // // const review = createComment(reviewText);

            // // const reviews = document.querySelector(".comments");
            // reviewForm.appendChild(reviewText);

            const res = await fetch(`/recipes/${recipeId}/review/add`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reviewbody: reviewText })
            });

            localStorage.clear();

            const data = await res.json().then(data => {
                if (data.message === "Success") {
                reviewForm.style.display = 'none';
                let newElement = document.createElement('div');
                newElement.setAttribute('class', `single-review-${data.reviewId}`);

                let username = document.createElement('p');
                username.setAttribute('class', 'username');
                username.innerText = data.username;
                newElement.appendChild(username);

                let br = document.createElement('br');
                newElement.appendChild(br);

                let reviewBody = document.createElement('p');
                reviewBody.setAttribute('id', `review-body-${data.reviewId}`);
                reviewBody.innerText = reviewText;
                newElement.appendChild(reviewBody);

                //add this back for dynamic edit/delete after submit/create

                let editForm = document.createElement('form');
                let deleteForm = document.createElement('form');
                let editButton = document.createElement('button');
                let deleteButton = document.createElement('button');

                editButton.setAttribute('id', 'editButton');
                editButton.setAttribute('value', `${data.reviewId}`);
                deleteButton.setAttribute('id', 'deleteButton');
                deleteButton.setAttribute('value', `${data.reviewId}`);

                editButton.innerText = 'Edit';
                deleteButton.innerText = 'Delete';

                editForm.setAttribute('action', `/recipes/reviews/${data.reviewId}/edit`);
                editForm.setAttribute('method', 'POST');

                deleteForm.setAttribute('action', `/recipes/reviews/${data.reviewId}/delete`);
                deleteForm.setAttribute('method', 'POST');

                editForm.appendChild(editButton);
                deleteForm.appendChild(deleteButton);

                newElement.appendChild(editForm);
                newElement.appendChild(deleteForm);

                document.getElementById('individual-reviews').appendChild(newElement);

                editButton.addEventListener('click', async e => {
                    e.preventDefault();
                    e.stopPropagation();

                    const reviewId = e.target.value;
                    const reviewText = document.querySelector(`#review-body-${reviewId}`)

                    reviewText.contentEditable == 'true' ? reviewText.contentEditable = 'false' : reviewText.contentEditable = 'true';

                    editButton.innerText = reviewText.contentEditable == 'false' ? 'Edit' : 'Save';

                    if (reviewText.contentEditable === 'false') {
                        localStorage.setItem('reviewText', reviewText.innerText);
                    }

                    const res = await fetch(`/recipes/reviews/${reviewId}/edit`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ theReviewText: localStorage.getItem('reviewText') })
                    });


                    localStorage.clear();

                    const data = await res.json();

                    if (data.message === "Success") {
                        const review = document.querySelector(`.reviewRow-${reviewId}`)
                    }
                })

                deleteButton.addEventListener('click', async e => {
                    e.preventDefault()
                    const reviewId = e.target.value
                    const res = await fetch(`/recipes/reviews/${reviewId}/delete`, {
                        method: 'DELETE'
                    })

                    const data = await res.json()
                    if (data.message === "Success") {
                        const review = document.querySelector(`.single-review-${reviewId}`);
                        review.remove();

                        let newReviewForm = document.createElement('form');
                        newReviewForm.setAttribute('action', `/recipes/${recipeIdFromURL}/review/add`);
                        newReviewForm.setAttribute('method', 'POST');
                        newReviewForm.setAttribute('id', 'submitReviewForm');

                        let cookies = document.cookie.split(';');
                        let value;

                        for (let i = 0; i < cookies.length; i++) {
                            if (cookies[i].includes('_csrf=')) {
                                value = cookies[i].substring(cookies[i].indexOf('=') + 1);
                            }
                        }

                        let input = document.createElement('input');
                        input.setAttribute('type', 'hidden');
                        input.setAttribute('value', value);
                        input.setAttribute('name', '_csrf');

                        let reviewBody = document.createElement('textarea');
                        reviewBody.setAttribute('name', 'reviewbody');
                        reviewBody.setAttribute('maxlength', '255');
                        reviewBody.setAttribute('id', 'review-input');

                        let button = document.createElement('button');
                        button.setAttribute('type', 'submit');
                        button.setAttribute('id', 'submitReviewButton');
                        button.setAttribute('value', recipeIdFromURL);
                        button.innerText = 'Submit Review';

                        let lineBreak = document.createElement('br');

                        newReviewForm.appendChild(input);
                        newReviewForm.appendChild(reviewBody);
                        newReviewForm.appendChild(lineBreak);
                        newReviewForm.appendChild(button);

                        document.getElementById('temp-container').after(newReviewForm);


                        button.addEventListener('click', async (e) => {

                            e.preventDefault()
                            e.stopPropagation()
                            const reviewForm = document.querySelector('#submitReviewForm');
                            const formData = new FormData(reviewForm);
                            const recipeId = e.target.value
                            const reviewText = formData.get('reviewbody');

                            const res = await fetch(`/recipes/${recipeId}/review/add`, {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ reviewbody: reviewText })
                            });

                            localStorage.clear();

                            const data = await res.json().then(data => {
                                if (data.message === "Success") {
                                    reviewForm.style.display = 'none';
                                    let newElement = document.createElement('div');
                                    newElement.setAttribute('class', `single-review-${data.reviewId}`);
                                    newElement.setAttribute('reviewId', data.reviewId);

                                    let username = document.createElement('p');
                                    username.setAttribute('class', 'username');
                                    username.innerText = data.username;
                                    newElement.appendChild(username);

                                    let reviewBody = document.createElement('p');
                                    reviewBody.setAttribute('id', `review-body-${data.reviewId}`);
                                    reviewBody.innerText = reviewText;
                                    newElement.appendChild(reviewBody);

                                    document.getElementById('individual-reviews').appendChild(newElement);
                                }
                            })


                        })
                    }
                })
                }
            })


        })
    }


    for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i];
        button.addEventListener('click', async (e) => {
            e.preventDefault()
            const reviewId = e.target.value
            const res = await fetch(`/recipes/reviews/${reviewId}/delete`, {
                method: 'DELETE'
            })

            const data = await res.json()
            if (data.message === "Success") {
                const review = document.querySelector(`.single-review-${reviewId}`);
                review.remove();

                let newReviewForm = document.createElement('form');
                newReviewForm.setAttribute('action', `/recipes/${recipeIdFromURL}/review/add`);
                newReviewForm.setAttribute('method', 'POST');
                newReviewForm.setAttribute('id', 'submitReviewForm');

                let cookies = document.cookie.split(';');
                let value;

                for(let i = 0; i < cookies.length; i++) {
                    if(cookies[i].includes('_csrf=')) {
                        value = cookies[i].substring(cookies[i].indexOf('=') + 1);
                    }
                }

                let input = document.createElement('input');
                input.setAttribute('type', 'hidden');
                input.setAttribute('value', value);
                input.setAttribute('name', '_csrf');

                let reviewBody = document.createElement('textarea');
                reviewBody.setAttribute('name', 'reviewbody');
                // reviewBody.setAttribute('value', )
                reviewBody.setAttribute('maxlength', '255');
                reviewBody.setAttribute('id', 'review-input');

                let button = document.createElement('button');
                button.setAttribute('type', 'submit');
                button.setAttribute('id', 'submitReviewButton');
                button.setAttribute('value', recipeIdFromURL);
                button.innerText = 'Submit Review';

                newReviewForm.appendChild(input);
                newReviewForm.appendChild(reviewBody);
                newReviewForm.appendChild(button);

                // document.getElementById('temp-container').appendChild(newReviewForm);
                document.getElementById('temp-container').after(newReviewForm);

                button.addEventListener('click', async (e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    const reviewForm = document.querySelector('#submitReviewForm');
                    const formData = new FormData(reviewForm);
                    const recipeId = e.target.value
                    const reviewText = formData.get('reviewbody');
                    // reviewForm.reset();

                    // // const storedComments = JSON.parse(localStorage.comments);
                    // // storedComments.push(commentText);
                    // localStorage.comments = JSON.stringify(storedComments);

                    // // const review = createComment(reviewText);

                    // // const reviews = document.querySelector(".comments");
                    // reviewForm.appendChild(reviewText);

                    const res = await fetch(`/recipes/${recipeId}/review/add`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ reviewbody: reviewText })
                    });

                    localStorage.clear();

                    const data = await res.json().then(data => {
                        if (data.message === "Success") {
                            reviewForm.style.display = 'none';
                            let newElement = document.createElement('div');
                            newElement.setAttribute('class', `single-review-${data.reviewId}`);

                            let username = document.createElement('p');
                            username.setAttribute('class', 'username');
                            username.innerText = data.username;
                            newElement.appendChild(username);

                            let br = document.createElement('br');
                            newElement.appendChild(br);

                            let reviewBody = document.createElement('p');
                            reviewBody.setAttribute('id', `review-body-${data.reviewId}`);
                            reviewBody.innerText = reviewText;
                            newElement.appendChild(reviewBody);

                            //add this back for dynamic edit/delete after submit/create

                            // let editForm = document.createElement('form');
                            // let deleteForm = document.createElement('form');
                            // let editButton = document.createElement('button');
                            // let deleteButton = document.createElement('button');

                            // editButton.setAttribute('id', 'editButton');
                            // editButton.setAttribute('value', `${data.reviewId}`);
                            // deleteButton.setAttribute('id', 'deleteButton');
                            // deleteButton.setAttribute('value', `${data.reviewId}`);

                            // editButton.innerText = 'Edit';
                            // deleteButton.innerText = 'Delete';

                            // editForm.setAttribute('action', `/recipes/reviews/${data.reviewId}/edit`);
                            // editForm.setAttribute('method', 'POST');

                            // deleteForm.setAttribute('action', `/recipes/reviews/${data.reviewId}/delete`);
                            // deleteForm.setAttribute('method', 'POST');

                            // editForm.appendChild(editButton);
                            // deleteForm.appendChild(deleteButton);

                            // newElement.appendChild(editForm);
                            // newElement.appendChild(deleteForm);

                            document.getElementById('individual-reviews').appendChild(newElement);
                            //document.getElementById('temp-container').after(newReviewForm);
                        }
                    })


                })
            }
        })
    }

    for (let i = 0; i < editButtons.length; i++) {
        const button = editButtons[i];
        button.addEventListener('click', async (e) => {
            e.preventDefault();
            e.stopPropagation();

            const reviewId = e.target.value;
            const reviewText = document.querySelector(`#review-body-${reviewId}`)


            reviewText.contentEditable == 'true' ? reviewText.contentEditable = 'false' : reviewText.contentEditable = 'true';

            button.innerText = reviewText.contentEditable == 'false' ? 'Edit' : 'Save';

            if (reviewText.contentEditable === 'false') {
                localStorage.setItem('reviewText', reviewText.innerText);
            }

            const res = await fetch(`/recipes/reviews/${reviewId}/edit`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ theReviewText: localStorage.getItem('reviewText') })
            });


            localStorage.clear();

            const data = await res.json();

            if (data.message === "Success") {
                const review = document.querySelector(`.reviewRow-${reviewId}`)
            }
        }
        )
    }
});
