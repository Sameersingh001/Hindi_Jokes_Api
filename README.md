
# 😂 Hindi Jokes API

# 😂 Hindi Jokes API – Free RESTful JSON API for Jokes in Hindi


Welcome to the **Hindi Jokes API**, a RESTful service that delivers fun and hilarious Hindi jokes. Easily fetch all jokes, search by ID, category, or get a random joke. Made for fun projects, bots, and entertainment apps!

This is a free and open-source **Hindi Jokes API** that serves **funny and clean jokes** in Hindi via **RESTful JSON endpoints**. Great for apps, websites, chatbots, and more.



## ✨ Features

- 200+ hilarious **Hindi jokes**
- Clean and family-friendly content
- Free and easy-to-use **Joke API**
- Works with **JSON**
- Use in chatbots, mobile apps, and websites


---

## 🌐 Base URL

```
https://hindi-jokes-api-c126.onrender.com/
```

---

## 📂 API Endpoints

### 🏠 `/`
- **Description:** Root route with a welcome/info message.
- **Method:** `GET`

---

### 🎲 `/random/joke`
- **Description:** Returns one random joke.
- **Method:** `GET`  
- **Example:**  
  `https://hindi-jokes-api-c126.onrender.com/random/joke`

---

### 🔍 `/random/joke/:id`
- **Description:** Get joke by specific ID.
- **Method:** `GET`  
- **Example:**  
  `https://hindi-jokes-api-c126.onrender.com/random/joke/2`

---

### 🎭 `/random/joke/category/:id`
- **Description:** Returns jokes by category.  
- **Method:** `GET`  
- **Note:** Category name must match exactly or in lowercase (e.g., `food`, `gym`, `youtube`)

- **Example:**  
  `https://hindi-jokes-api-c126.onrender.com/random/joke/category/gym`

---

## 🛠️ How to Use

### 🔹 Browser
Just paste any of these URLs into your browser:
```
https://hindi-jokes-api-c126.onrender.com/random/joke
```

---

### 🔹 JavaScript Example
```js
fetch("https://hindi-jokes-api-c126.onrender.com/random/joke")
  .then(res => res.json())
  .then(data => console.log(data));
```

---

### 🔹 Python Example
```python
import requests

response = requests.get("https://hindi-jokes-api-c126.onrender.com/random/joke")
print(response.json())
```

---

## ✅ Sample Response
```json
{
  "id": 12,
  "category": "Santa Banta",
  "title": "Santa’s Smartphone",
  "punchline": "Santa: Naya phone liya! Banta: Features kya hain? Santa: Jab girta hai toh awaaz karta hai – 'Aree O Sambha!' 🤣"
}
```

---

## ❌ Error Response
❌ Error: Joke Not Found
Sorry, the joke you are looking for does not exist. Please check the ID or category and try again.


---

## ⚙️ Built With

- Node.js  
- Express.js  
- JSON file storage  
- Deployed on Render

---


---
**Tags:** Hindi Jokes API, Free joke API, RESTful joke service, JSON joke API, Desi jokes, Indian comedy API, Open source API, Random Hindi jokes


## ✨ Author

**Sameer Singh**  
Made with ❤️ for desi humor fans.

---

🔗 **Live API:**  
[https://hindi-jokes-api-c126.onrender.com/random/joke]
