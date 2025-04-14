### vue-form-engine-demo

# 📦 vue-form-engine-demo

This is the **demo project** for testing Web Components built using [vue-form-engine-wc](https://github.com/your-username/vue-form-engine-wc).

---

## 🚀 Getting Started

### 1️⃣ Install and Build the Web Component First

Before using this project, you need to build the Web Component from the `vue-form-engine-wc` project.

1. Clone and install `vue-form-engine-wc`
2. Follow the instructions in its `README.md` to:

   - Build the Web Component using:

     ```bash
     npm run clean-build-wc
     ```

   - Copy it to this project using:

     ```bash
     npm run clean-create-copy-wc
     ```

   > 🔁 These steps will generate and place `my-web-components.js` inside:
   > `public/web-components/` of this demo project

---

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run the Demo

```bash
npm run dev
```

### 🧪 Usage Example

In your .vue file (e.g., FormComponent.vue), use the Web Component like this:
This template should help get you started developing with Vue 3 in Vite.

```bash
<script setup lang="ts">
  // No need to import anything in script
</script>

<template>
  <base-button label="Click Me from Web Component" />
</template>
```

And make sure this line exists in your index.html:

```bash
<script type="module" src="/web-components/my-web-components.js"></script>
```

### 🧹 Troubleshooting

If you don’t see styles applied, ensure:

- You’ve built the component correctly.

- It uses Shadow DOM and inline styles.

Always rebuild and recopy after updating the Web Component.

### 📁 Folder Structure

```bash
vue-form-engine-demo/
├── public/
│ └── web-components/
│ └── my-web-components.js # <-- Copied here from vue-form-engine-wc
├── src/
│ └── views/
│ └── FormComponent.vue
├── index.html
└── ...
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
