const foodData = [
    {
        category: 'veg',
        name: 'Pap and Chakalaka',
        image: 'assets/pac.jpeg',
        description: 'A popular South African dish made of maize porridge and spicy vegetable relish.',
        spiceLevel: 'Medium'
    },
    {
        category: 'nonveg',
        name: 'Bobotie',
        image: 'assets/bobotic.jpg',
        description: 'A dish made of spiced minced meat baked with an egg-based topping.',
        spiceLevel: 'Mild'
    },
    {
        category: 'seafood',
        name: 'Pickled Fish',
        image: 'assets/pickled-fish.avif',
        description: 'A traditional dish often served with sweet and tangy flavors.',
        spiceLevel: 'Medium'
    },
    {
        category: 'veg',
        name: 'Bunny Chow',
        image: 'assets/bunny-chow.jpg',
        description: 'A street food favorite from Durban consisting of a hollowed-out loaf of bread filled with curry.',
        spiceLevel: 'Low'
    },
    {
        category: 'nonveg',
        name: 'Chili',
        image: 'assets/chili.jpg',
        description: 'A popular South African dish made with ground beef, vegetables, and spices.',
        spiceLevel: 'High'
    },
    {
        category:'seafood',
        name: 'Pho',
        image: 'assets/pho.jpg',
        description: 'A traditional South African dish made with rice, vegetables, and spices.',
        spiceLevel: 'High'
        
    },

    {
        category: 'nonveg',
        name: 'Mushroom Risotto',
        image: 'assets/risotto.png',
        description: 'A traditional South African dish made with tomato sauce, mushrooms, and cheese.',
        spiceLevel: 'Medium'

    },
    {
        category: 'nonveg',
        name: 'Samosa',
        image: 'assets/samosa.jpeg',
        description: 'A popular South African dish made with tomato puree, onions, and spices.',
        spiceLevel: 'Low'
    }

];

function displayFood(items) {
    const container = document.getElementById('foodContainer');
    container.innerHTML = ''; // Clear previous content
    items.forEach(item => {
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('food-item');
        foodDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="food-details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <p class="spice-level">Spice Level: ${item.spiceLevel}</p>
            </div>
        `;
        container.appendChild(foodDiv);
    });
}

function filterFood(category) {
    if (category === 'all') {
        displayFood(foodData);
    } else {
        const filteredData = foodData.filter(item => item.category === category);
        displayFood(filteredData);
    }
}

window.onload = () => displayFood(foodData);