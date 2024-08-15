// collection of recipes
const recipes = [
    {
        name: "Nigeria jollof rice",
        description: "This is a foolproof recipe for cooking Jollof rice, West Africa's most popular dish, which can be served as a side dish or a main.",
        img: "assets/images/jollof-rice.jpeg",
        servings: 8,
        prep_time: 15,
        cook_time: 15,
        total_time: 30,
        ingredients: [
            "1 large, ripe tomato, cored, quartered",
            "1 large red bell pepper, seeded, roughly chopped",
            "1 whole habanero pepper, stem removed",
            "1 whole Fresno chili, or jalapeño, stem removed",
            "4 cloves garlic, peeled",
            "1 tablespoon minced ginger",
            "2 cups water",
            "For the rice:",
            "⅓ cup olive oil",
            "1 red onion, diced",
            "1 teaspoon salt, plus more to taste",
            "¼ cup tomato paste",
            "2 tablespoons smoked paprika",
            "1 teaspoon curry powder",
            "1 teaspoon cumin",
            "½ teaspoon freshly ground black pepper",
            "¼ teaspoon turmeric",
            "1 teaspoon dried thyme",
            "2¼ cups basmati rice",
            "1 bay leaf",
            "1 tablespoon chicken bouillon paste",
            "¼ cup chopped green onion, for garnish, optional",
            "¼ cup chopped cilantro, for garnish, optional"
        ],
        steps: [
            "Combine tomato, red bell pepper, habanero pepper, fresno chili, garlic, ginger, and water in a blender for the sauce. Blend on high until smooth and set aside.",
            "Heat olive oil in a saucepan over medium heat. Add onion and salt and sauté until onion starts to soften, 4 to 5 minutes. Clear space in the middle of the pan, add tomato paste, and sauté for 2 to 3 minutes. Season with paprika, curry powder, cumin, thyme, pepper, and turmeric; continue cooking for 1 to 2 minutes until everything is well combined.",
            "Turn off the heat, and stir in the rice, making sure every grain of rice is coated with the oil-tomato mixture. Add bay leaf and chicken bouillon paste.",
            "Turn heat to high, stir in tomato sauce, and bring to a vigorous simmer. Cover with a tight fitting lid, reduce heat to medium-low, and simmer for 20 minutes. Do not remove the lid or stir rice.",
            "Turn off heat after 20 minutes, and set the timer for 12 minutes. Allow rice to sit and do not remove the lid.",
            "After the 12 minutes are up, remove lid, and fluff rice with a fork, separating all the grains. Serve garnished with green onions and chopped cilantro."
        ]
    }, 
    {
        "name": "Classic Spaghetti Carbonara",
        "description": "This traditional Italian pasta dish features a creamy, egg-based sauce with crispy pancetta and freshly grated Parmesan cheese.",
        "img": "assets/images/Classic-Spaghetti-Carbonara.webp",
        "servings": 4,
        "prep_time": 10,
        "cook_time": 20,
        "total_time": 30,
        "ingredients": [
            "400g spaghetti",
            "150g pancetta, diced",
            "2 large eggs",
            "1 egg yolk",
            "3/4 cup grated Parmesan cheese",
            "2 cloves garlic, minced",
            "Salt and freshly ground black pepper to taste",
            "Chopped parsley for garnish"
        ],
        "steps": [
            "Cook the spaghetti in a large pot of salted boiling water until al dente. Reserve 1/2 cup of pasta water before draining.",
            "While the pasta cooks, fry the pancetta in a large skillet over medium heat until crispy. Add the minced garlic and cook for 1 minute. Remove from heat.",
            "In a bowl, whisk together the eggs, egg yolk, and grated Parmesan cheese. Season with salt and pepper.",
            "Add the drained spaghetti to the skillet with the pancetta and garlic. Toss to combine.",
            "Pour the egg and cheese mixture over the pasta, using tongs to toss quickly. The residual heat will cook the eggs to create a creamy sauce. If the sauce is too thick, add a little reserved pasta water to reach desired consistency.",
            "Serve immediately, garnished with chopped parsley and additional grated Parmesan cheese."
        ]
    },
    {
        "name": "Mediterranean Quinoa Salad",
        "description": "A vibrant salad packed with the flavors of the Mediterranean, featuring quinoa, cherry tomatoes, cucumber, olives, feta cheese, and a lemon-herb dressing.",
        "img": "assets/images/mediterranean-quinoa-salad-3.jpg",
        "servings": 4,
        "prep_time": 15,
        "cook_time": 15,
        "total_time": 30,
        "ingredients": [
            "1 cup quinoa",
            "2 cups water",
            "1 cup cherry tomatoes, halved",
            "1 cucumber, diced",
            "1/2 cup Kalamata olives, pitted and sliced",
            "1/2 cup feta cheese, crumbled",
            "1/4 cup red onion, finely chopped",
            "1/4 cup fresh parsley, chopped",
            "1/4 cup olive oil",
            "2 tablespoons lemon juice",
            "1 garlic clove, minced",
            "Salt and freshly ground black pepper to taste"
        ],
        "steps": [
            "Rinse the quinoa under cold water and drain. In a medium saucepan, bring 2 cups of water to a boil. Add the quinoa, reduce heat to low, cover, and simmer for 15 minutes or until the water is absorbed.",
            "Remove from heat and let it stand covered for 5 minutes. Fluff with a fork and allow to cool.",
            "In a large bowl, combine the cooled quinoa, cherry tomatoes, cucumber, olives, feta cheese, and red onion.",
            "In a small bowl, whisk together the olive oil, lemon juice, minced garlic, parsley, salt, and pepper to create the dressing.",
            "Pour the dressing over the salad and toss to combine.",
            "Chill in the refrigerator for at least 30 minutes before serving to allow the flavors to meld."
        ]
    },
    {
        "name": "Spicy Thai Basil Chicken Stir-Fry",
        "description": "A vibrant and aromatic Thai-inspired chicken stir-fry with a kick of heat from red chili peppers.",
        "img": "assets/images/spicy-thai-basil-chicken.jpeg",
        "servings": 4,
        "prep_time": 15,
        "cook_time": 10,
        "total_time": 25,
        "ingredients": [
            "500g boneless, skinless chicken breasts, thinly sliced",
            "2 tablespoons vegetable oil",
            "3 cloves garlic, minced",
            "2 red chili peppers, sliced (adjust to your preferred level of spiciness)",
            "1 red bell pepper, thinly sliced",
            "1 yellow bell pepper, thinly sliced",
            "1 onion, thinly sliced",
            "1 cup fresh basil leaves",
            "2 tablespoons soy sauce",
            "1 tablespoon oyster sauce",
            "1 teaspoon fish sauce",
            "1 teaspoon sugar",
            "Freshly ground black pepper to taste",
            "Steamed jasmine rice, for serving"
        ],
        "steps": [
            "Heat the vegetable oil in a wok or large skillet over medium-high heat.",
            "Add the minced garlic and sliced red chili peppers. Stir-fry for 1 minute until fragrant.",
            "Add the sliced chicken and cook until no longer pink.",
            "Add the bell peppers and onion. Stir-fry for another 2-3 minutes until the vegetables are slightly softened.",
            "In a small bowl, mix together the soy sauce, oyster sauce, fish sauce, and sugar.",
            "Pour the sauce over the chicken and vegetables. Toss to coat evenly.",
            "Add the fresh basil leaves and stir-fry for an additional 1-2 minutes until wilted.",
            "Season with freshly ground black pepper.",
            "Serve hot over steamed jasmine rice."
        ]
    }
    
    
];

document.addEventListener("DOMContentLoaded", function(){
    // render recipes list
    const recipeContainer = document.getElementById("recipe-grid");

    const modal =  document.getElementById("recipe-modal");
    const closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
        hideModal(modal)
    }

    // event listener to handle modal close on esc key 
    window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            hideModal(modal)
        }
    });

    // event listener to handle modal close when click outside the modal content
    window.onclick = function (event) {
        if (event.target == modal) {
            hideModal(modal)
        }
    }

    renderRecipes(recipeContainer, modal);
});

function renderRecipes(container, modal)
{
    recipes.forEach(recipe => {
        // Create card div
        const card = document.createElement('div');
        card.className = 'card';
    
        // Create img
        const img = document.createElement('img');
        img.className = 'img-fluid mb-3';
        img.src = recipe.img;
        img.alt = recipe.name;
        card.appendChild(img);
    
        // Create card body
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
    
        // Create card title
        const cardTitle = document.createElement('h5');
        cardTitle.className = 'card-title mb-3 capitalize';
        cardTitle.textContent = recipe.name;
        cardBody.appendChild(cardTitle);
    
        // Create card text
        const cardText = document.createElement('p');
        cardText.className = 'card-text text-truncate mb-3';
        cardText.textContent = recipe.description;
        cardBody.appendChild(cardText);
    
        // Create button
        const btn = document.createElement('button');
        btn.className = 'btn btn-primary';
        btn.textContent = 'View recipe';
        btn.onclick = function(){
            showRecipe(recipe, modal)
        }

        cardBody.appendChild(btn);

    
        // Append card body to card
        card.appendChild(cardBody);
    
        // Append card to the DOM
        container.appendChild(card);
    });
    
}

// handle logic to show modal
function showModal(modalElement)
{
    modalElement.style.display = "block";
}

// handle hiding of modal
function hideModal(modalElement)
{
    modalElement.style.display = "none";
}

function showModal(modalElement)
{
    modalElement.style.display = "block";
}

function showRecipe(recipe, modal)
{
    modal.querySelector("#recipe-name").textContent = recipe.name;
    modal.querySelector("#recipe-description").textContent = recipe.description;
    modal.querySelector("#recipe-img").src = recipe.img;
    modal.querySelector("#recipe-servings-count").textContent = recipe.servings;
    modal.querySelector("#recipe-prep-time").textContent = recipe.prep_time +'mins';
    modal.querySelector("#recipe-cook-time").textContent = recipe.cook_time +'mins';
    modal.querySelector("#recipe-total-time").textContent = recipe.total_time +'mins';

    const ingredientList = modal.querySelector("#ingredients-list");
    
    // clear ingredientlist
    while (ingredientList.firstChild) {
        ingredientList.removeChild(ingredientList.firstChild);
    }

    recipe.ingredients.forEach(function(ingredient){
        const listItem = document.createElement("li");
        listItem.textContent = ingredient
        listItem.className = "cursor-pointer"

        listItem.onclick = checkoutGroceryList

        ingredientList.appendChild(listItem)
    })

    const recipeStepsContainer = modal.querySelector("#recipe-steps");

    // clear steps to prepare recipes
    while (recipeStepsContainer.firstChild) {
        if(recipeStepsContainer.firstChild.tagName = "p"){
            recipeStepsContainer.removeChild(recipeStepsContainer.firstChild);
        }
    }

    let StepCount = 1;
    Array.from(recipe.steps).forEach((step) => {

        const stepParagraph = document.createElement('p');
        stepParagraph.className = "mb-3"
        const spanCount = document.createElement('span');
        spanCount.textContent = StepCount;
        spanCount.className = "step-number";
        stepParagraph.appendChild(spanCount)

        const spanText = document.createElement('span');
        spanText.textContent = step
        stepParagraph.appendChild(spanText)

        // append paragraph containing step info to the cooking step section
        recipeStepsContainer.appendChild(stepParagraph)
        StepCount++;
        
    });

    showModal(modal);
}

// to visually mark ingredients available
function checkoutGroceryList(event)
{
    // toggle strike-out class
    event.target.classList.toggle("strike-out");
}