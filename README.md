#### 7) Create a README file to answer the following questions-

> **⚠️ Warning:** Do not use any AI tools to answer these questions. You must write the answers in **Bangla**.

#### 1) What is the difference between `null` and `undefined`?

#### 2) What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?

#### 3) What is the difference between `==` and `===`?

#### 4) What is the significance of `async`/`await` in fetching API data?

#### 5) Explain the concept of Scope in JavaScript (Global, Function, Block).

## ⚡ Dynamic Features & Functionalities

1) Category Loading
Load Product Categories dynamically on the UI (e.g., as filter buttons or a dropdown).

2) Category Click → Product Data
On clicking a category: load products of that specific category.
Display in a grid layout (e.g., 3 or 4 columns).

3) Card Contents
Each product card must include:
- **Image** (from API)
- **Title** (truncated if too long)
- **Price** ($ value)
- **Category** (badge or text)
- **Rating** (Visualize stars or just show the number)
- **Details Button**
- **Add to Cart button**

4) Modal on "Details" Click
Clicking the "Details" button on a card opens a modal with full product details:
- Full Title
- Full Description
- Price & Rating
- "Buy Now" or "Add to Cart" button in modal.

## 🧪 Challenges (Optional)

    1) Add to Cart Interaction
    Clicking "Add to Cart":
    - Adds the product to a Cart list/array.
    - Updates a Cart Count in the Navbar.
    - (Optional) Persist in LocalStorage.

    2) Cart Calculation
    Show a summary (maybe in a sidebar or a separate section/modal) that lists added items and calculates the **Total Price**.

    3) Remove from Cart
    Ability to remove an item from the cart and update the Total Price instantly.

    4) Loading Spinner
    Show a loading spinner or skeleton loader while fetching data from the API.

    5) Active State
    Highlight the currently selected category button.

🧰 Technology Stack:
    HTML
    CSS (Vanilla / Tailwind / DaisyUI)
    JavaScript (Vanilla only, no frameworks like React/Vue for this assignment)



## 🔗 Submission
- **Live Link :** https://swiftcart-commerce.netlify.app
- **GitHub Repository:** https://github.com/webdev-sb/a6