export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(true ? { cssnano: {} } : {})
  },
}
