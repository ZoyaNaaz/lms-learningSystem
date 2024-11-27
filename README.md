# LMS Frontend

### Setup instruction

1. Clone the project

```
    git clone https://github.com/singhsanket143/lms-frontend-hn.git
```
2. Move into the directory

```
    cd lms-learningSystem
```
3. Install dependencies

```
    npm i
```

4. Run the server

```
    npm run dev
```

### Setup taildwind in our project

1. Install tailwind and other dependencies

```
    npm install -D tailwindcss postcss autoprefixer
```
2. Create tailwind config file

```
    npx tailwindcss init
```
3. Add file extensions to tailwind config file in the contents property

```
    "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html",
```
4. Add the tailwind directives at the top of the index.css file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
5. Add the following details in the plugin property of tainwind config

```
    [require("daisyui"), require("@tailwindcss/line-clamp")]
```

### Adding plugins and dependencies

```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axi
os react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort esline
