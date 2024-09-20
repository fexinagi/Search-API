document.getElementById("searchButton").addEventListener("click", async function () {
    const mealName = document.getElementById("mealInput").value;
    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const mealContainer = document.getElementById("mealContainer");
        mealContainer.innerHTML = ''; 
        if (data.meals) {
            const meal = data.meals[0]; 
          
            const mealElement = document.createElement("div");
            mealElement.classList.add("meal");
            mealElement.innerHTML = `
                <h2>${meal.strMeal}</h2>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p>${meal.strInstructions}</p>
            `;
            mealContainer.appendChild(mealElement);
        } else {
            mealContainer.innerHTML = `<p>Meal not found. Please try another name.</p>`;
        }
    } catch (error) {
        console.log("Error:", error);
    }
});