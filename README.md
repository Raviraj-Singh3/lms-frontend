# LMS Frontend

### Setup instruction

1. Clone the project

```
    git clone 
```

2. Move into the directory

```
    cd lms-frontend
```

3. install dependencies

```
    npm i
```

4. run the server

```
    npm run dev
```

### Setup tailwind
[Tailwind official instruction doc](https://tailwindcss.com/docs/guides/vite)

### To setup daisyui -

Add the following details in the plugin property of tailnwind config
```
    [require("daisyui"), require("@tailwindcss/line-clamp")]
```

To enable dark mode add the following in tailwind config

```
     daisyui: {
    themes: ["light", "dark", "cupcake"],
  },

```
And in HTML file
```
    <html data-theme="dark"></html>
```

