### Steps

#### **Step 0:** Run this command to ignore all node_modules

- **`touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules`**
- _`git rm -r --cached`_ removes the node_modules folder from git control if it was added before. Otherwise, this will show a warning **pathspec 'node_modules' did not match any files**, which has no side effects and you can safely ignore. The flags cause the removal to be recursive and include the cache.

#### **Step 1:** Run this command in the terminal and click enter

- `npm init -y`

- this will going to create an empty **package.json** file

#### **Step 2:** create an **index.js** file

- this will be the entry point of our app

#### **Step 3:** install express

- `npm install --save express`

#### **Step 4:** add this property to **package.json**

```json
"type": "module"
```

- after adding these, we can use the newer statements like in the next step

#### **Step 5:** import the following modules in the **index.js**

```js
import express from "express";
import bodyParser from "body-parser";
```

| module     | desciption                                                                                                                                                                                               |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| express    | to make REST operations                                                                                                                                                                                  |
| bodyParser | module is middleware that extracts the entire body portion of an incoming request and exposes it on req.body. It can handle different types of request bodies, including JSON, URL-encoded, and raw text |

#### **Step 6:** now initialize the express application, by calling express as function

```js
const app = express();
```

#### **Step 7.** Initialize the PORT constant to which we listen

```js
const PORT = 5000;
```

#### **Step 8.** Use Express to intercept all request and parse all the raw data to json format

```js
app.use(bodyParser.json());
```

#### **Step 9.** Bind express to listen to the PORT specified

```js
app.lister(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
```

This should be the index.js by now:

```js
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
```

#### **Step 10.** Start the express app using the command:

- `node index.js`

Output:

![run_express_js](/docs/snaps/run_express_01.png)
