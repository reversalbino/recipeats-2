window.addEventListener("DOMContentLoaded", (e) => {

    const starContainer = document.querySelector('.addrating');
    const stars = document.getElementsByClassName('star')
    let url = window.location.pathname;
    const urlParts = url.split('/');
    const recipeId = urlParts[2];

    for (let i = 0; i < stars.length; i++) {
        let star = stars[i];
        star.addEventListener('click', async(e) => {
            console.log(e.target.value)
            localStorage.setItem('userRating', e.target.value)
            console.log(e.target)
            let userId = document.getElementById(`star${i+1}`).getAttribute('userId');
            console.log(userId)
            const res = await fetch(`/recipes/${recipeId}/${userId}/${e.target.value}`, {
                method: 'POST',
            });
            const data = await res.json()
console.log(data)
            if(data.message === 'success'){
                const avgrating = data.avgrating
                const ratingContainer = document.getElementById('rating-container')
                // console.log(avgrating, ratingContainer)
                ratingContainer.innerHTML = '';
                let nearestHalf = (Math.round(avgrating * 2) / 2);
                for (let i = 0; i < Math.floor(nearestHalf); i++) {
                    let newStar = document.createElement('p')
                    newStar.innerText = 'Stars here'
                    newStar.setAttribute('class', 'recipeRating')
                    newStar.setAttribute('class', 'fullStar')
                    ratingContainer.appendChild(newStar)
                } 
                // adding half stars
                if (!(nearestHalf == 1 || nearestHalf == 2 ||nearestHalf == 3 ||nearestHalf == 4 || nearestHalf == 5)){
                    let newStar = document.createElement('p')
                    newStar.innerText = 'Half Star here'
                    newStar.setAttribute('class', 'recipeRating')
                    newStar.setAttribute('class', 'halfStar')
                    ratingContainer.appendChild(newStar)
                }
            }
        })
    }












    // fetch(`/recipes/${recipeId}/ratings`)
    //     .then(res => res.json())
    //     .then(res => {
    //         if (res.userId) {
    //             rateThisRecipeText.innerText = "Your rating"
    //             let val = (res.userRating.value)
    //             let StarPicked = document.querySelector(`[value="${val}"]`)
    //     .catch(err => rateThisRecipeText.innerText = "Rate this recipe")

    //             const postRating = (e) => {
    //                 if (e.target.value) {
    //                     // get numberic value from selected star
    //                     let value = e.target.value
    //                     fetch(`/recipes/${recipeId}/ratings`, {
    //                         method: 'POST',
    //                         headers: { 'Content-Type': 'application/json' },
    //                         body: JSON.stringify({ value: value })
    //                     }).then(res => res.json())
    //                 }
    //             }
    //             starContainer.addEventListener("click", postRating)
    //         }
    //     })

})

