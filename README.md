[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=alexandr-g/nextjs-tailwind-example)](https://dependabot.com)

# A minimalist NextJS v10 + TailwindCSS v2 example setup

An example uses a minimum setup for [NextJS](https://nextjs.org/) in combination with [Tailwind v2](https://tailwindcss.com/) for styling. You can clone or fork a repository to play around or use it for your needs.

<img width="1792" alt="Screenshot 2020-05-20 at 17 38 47" src="https://user-images.githubusercontent.com/9251327/100365006-2a6ec300-2fff-11eb-83ca-f474adee5a85.png">

## Demo

Visit https://nextjs-tailwind-example.now.sh/ for live demo

## Available Scripts

In the project root directory you can run:

- `npm run dev` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- `npm run build` - builds the app for production.

- `npm start` - serves `npm run build` output on the `http://localhost:3000`

## Notes

- Alternatively to direct dependency on `autoprefixer`, you could install and add [postcss-preset-env](https://preset-env.cssdb.org/) plugin in the `postcss.config.js` file.

- To remove unused CSS, this example uses Tailwind CSS [`purge` option](https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css).
