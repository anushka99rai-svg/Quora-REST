# Quora-REST 💬

A RESTful web application built with **Node.js**, **Express**, and **EJS** that simulates a simplified Quora-like post-sharing platform. This project demonstrates full **CRUD** (Create, Read, Update, Delete) operations following standard REST architectural principles.

---

## 📌 Features

- **Read / View All Posts:** Browse all existing posts with usernames and contents.
- **Create New Post:** Form to submit a new post with an assigned unique identifier (UUID v4).
- **View Single Post:** Detailed view for individual posts by ID.
- **Edit / Update Post:** Edit and update existing post content using HTTP `PATCH` (via `method-override`).
- **Delete Post:** Remove posts from the feed using HTTP `DELETE` (via `method-override`).
- **Server-Side Rendering (SSR):** Render dynamic pages using the EJS templating engine.

---

## 🛠️ Tech Stack

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/)
- **Templating Engine:** [EJS (Embedded JavaScript)](https://ejs.co/)
- **Middleware & Utilities:**
  - [`method-override`](https://www.npmjs.com/package/method-override): Allows using HTTP verbs such as `PUT`, `PATCH`, and `DELETE` in HTML forms.
  - [`uuid`](https://www.npmjs.com/package/uuid): Generates unique identifiers for each post.
  - `express.urlencoded` & `express.json`: Parses incoming form and JSON request bodies.

---

## 🛣️ RESTful Routes

| HTTP Method | Route | Description | View / Action |
| :--- | :--- | :--- | :--- |
| **GET** | `/posts` | List all posts | `index.ejs` |
| **GET** | `/posts/new` | Display form to create a new post | `new.ejs` |
| **POST** | `/posts` | Create a new post and redirect to `/posts` | Redirects to `/posts` |
| **GET** | `/posts/:id` | Show detailed view of a single post by ID | `show.ejs` |
| **GET** | `/posts/:id/edit` | Display form to edit post content | `edit.ejs` |
| **PATCH** | `/posts/:id` | Update a specific post's content | Redirects to `/posts` |
| **DELETE** | `/posts/:id` | Delete a specific post by ID | Redirects to `/posts` |

---

## 📂 Project Structure

```text
REST/
├── public/                 # Static assets (stylesheets, images)
│   └── style.css           # Custom CSS styling
├── views/                  # EJS template files
│   ├── edit.ejs            # Edit post form
│   ├── index.ejs           # Main feed displaying all posts
│   ├── new.ejs             # New post creation form
│   └── show.ejs            # Single post detail view
├── index.js                # Express app entry point & route handlers
├── package.json            # Project dependencies and metadata
├── package-lock.json       # Locked dependency tree
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

Follow the instructions below to get a local copy up and running.

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 16 or later) and `npm` installed:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anushka99rai-svg/Quora-REST.git
   cd Quora-REST
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the application:**
   ```bash
   node index.js
   ```
   *(Or with `nodemon` for auto-reloading during development: `npx nodemon index.js`)*

4. **Access the application:**
   Open your browser and navigate to:
   ```text
   http://localhost:8080/posts
   ```

---

## 🔮 Future Enhancements

- [ ] Connect to a persistent database (e.g., MongoDB with Mongoose or PostgreSQL).
- [ ] Add user authentication & authorization (sign up, login, edit only own posts).
- [ ] Add flash messages for actions (post created, updated, deleted).
- [ ] Enhance UI styling with responsive CSS or Bootstrap/Tailwind CSS.

---

## 👤 Author

- **Anushka Rai** - [@anushka99rai-svg](https://github.com/anushka99rai-svg)

---

## 📄 License

This project is licensed under the [ISC](LICENSE) License.
