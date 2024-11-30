let wishlist = [];

function addItem() {
    const itemName = document.getElementById('item-name').value;
    if (itemName.trim() === "") {
        alert("Please enter a valid item name.");
        return;
    }

    const newItem = {
        name: itemName,
        status: "pending"
    };

    wishlist.push(newItem);
    document.getElementById('item-name').value = "";
    displayWishlist();
}

function markAcquired(itemName) {
    const itemIndex = wishlist.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        wishlist[itemIndex].status = "acquired";
        displayWishlist();
    } else {
        alert("Item not found in your List.");
    }
}

function markPending(itemName) {
    const itemIndex = wishlist.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        wishlist[itemIndex].status = "pending";
        displayWishlist();
    } else {
        alert("Item not found in your List.");
    }
}

function removeItem(itemName) {
    const itemIndex = wishlist.findIndex(item => item.name === itemName);
    if (itemIndex !== -1) {
        wishlist.splice(itemIndex, 1);
        displayWishlist();
    } else {
        alert("Item not found in  your list.");
    }
}

function displayWishlist() {
    const wishlistList = document.getElementById('wishlist-list');
    wishlistList.innerHTML = ''; 

    if (wishlist.length === 0) {
        const emptyItem = document.createElement('li');
        emptyItem.textContent = "Your wishlist is empty.";
        wishlistList.appendChild(emptyItem);
    } else {
        wishlist.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <span>${index + 1}. ${item.name}</span>
                <span>[${item.status}]</span>
                <button onclick="markAcquired('${item.name}')">Acquired</button>
                <button onclick="markPending('${item.name}')">Pending</button>
                <button onclick="removeItem('${item.name}')">Remove</button>
            `;
            wishlistList.appendChild(listItem);
        });
    }
}

displayWishlist(); 