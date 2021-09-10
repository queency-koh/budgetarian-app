# The Budgetarian App


1. How to [setup an Angular project](https://dev.to/queencykoh/setting-up-angular-project-4nnd)
2. How to [create a feature module](https://dev.to/queencykoh/creating-a-feature-module-458)
3. How to [lazy load a feature module](https://dev.to/queencykoh/lazy-load-a-feature-module-41h6)
4. How to [install tailwind](https://dev.to/queencykoh/setting-up-tailwind-css-in-angular-11b4)
5. How to [install line awesome](https://dev.to/queencykoh/setting-up-line-awesome-in-angular-1i4l)
6. How to [setup fake REST API with JSON Server](https://dev.to/queencykoh/setting-up-fake-rest-api-with-json-server-in-angular-2na2)

## Create a fake REST API

1. In the root directory, create `db.json` file
2. Add the followning json data
    ```{
    "transactions": [
      {
        "id": "78988b03-fae4-f609-d439-296fabad5894",
        "type": "expense",
        "date": "2021-09-10T16:00:00.000Z",
        "title": "Dine Out",
        "category": "Lifestyle",
        "amount": "10100",
        "notes": ""
      }
    ],
    "categories": [
      {
        "id": 1,
        "name": "Lifestyle",
        "budget": 1000
      }
    ]
    }`
3. Run `json-server --watch db.json`



