# Blocknet API Documentation

This repository contains the source code for Blocknet's [API documentation website](https://api.blocknet.org).

> Powered by [Slate Docs](https://github.com/lord/slate).




## Getting Started

Using Windows 10:

Download & install ruby+devkit 2.4.7 x64 from here https://rubyinstaller.org/downloads/archives/.

Download & install nodejs from here https://nodejs.org/en/.

```shell
gem install bundler -v 1.16.1
# from root directory of api-docs
bundle install
bundle exec middleman server
```

Using Linux or MacOS:

```shell
# either run this to run locally
bundle install
bundle exec middleman server

# OR run this to run with vagrant
vagrant up
```

Using Docker:

Download and install docker.

```shell
# build the docker image
docker build -t blocknetdx/api-docs .

# run from the root directory of this project
docker run --rm --name api-docs -p 4567:4567 -v $(pwd)/source:/srv/api-docs/source blocknetdx/api-docs:latest serve
```

You can now see the docs at http://localhost:4567. This will reload automatically when changes are saved.




## Editing

* __Syntax__ - These documents use [Markdown syntax](https://github.com/lord/slate/wiki/Markdown-Syntax).
* __Content__ - For better maintenance, the content is composed of separate files in `source/includes/`. Add new files to the docs by including the file name under `includes:` in `source/index.html.md`. This also adds the content as a menu item.
* __Layout__ - The page template is managed with `source/layouts/layout.erb` and `source/stylesheets/`.
* __Formatting Conventions__: 
	* __Styling__:
		* *Italics* - Referencing menu/button text (*Settings*, *Submit*, *Cancel*, etc)
		* __*Bold+Italics*__ - Word emphasis (__*available*__ balances)
		* `inline code` - code, commands (`servicenode list`), calls (`dxGetOrders`), file contents (`ExchangeWallets=`), state (`finished`), parameters (`dryrun`) , files (`blocknetdx.conf`), directories (`BlocknetDX/`)
	* __Naming__:
		* Parameters - Lowercase, underscores (correct: `order_id`, `orderid`; incorrect: `order id`, `order-id`, `orderID`)
	* __Spacing__:
		* 10 lines separating each call
		* 2 lines separating each section within a call
		* 2 lines separating response types

[See full wiki](https://github.com/lord/slate/wiki).




## Publishing

1. Add notes to `source/includes/_changelog.md`.
	1. Use the following header format:
		```
		M/D/YYY    |
		---------- |
		```
	1. Replace `M/D/YYY` with the publishing date in said format.
	1. See past changelog entries for reference.
1. Build the docs with the `bundle exec middleman build` command. 
   * Docker to build `docker run --rm --name api-docs -v $(pwd)/build:/srv/api-docs/build -v $(pwd)/source:/srv/api-docs/source blocknetdx/api-docs:latest`
   * Docker windows `docker run --rm --name api-docs -v %cd%/build:/srv/api-docs/build -v %cd%/source:/srv/api-docs/source blocknetdx/api-docs:latest`
1. Deploy `build/` contents to staging site for testing.
1. Deploy `build/` contents to [https://api.blocknet.org/](https://api.blocknet.org/) by copying all files and folders in `build/` folder to `docs/` folder, then committing the changes, then pushing the commit to the `master` branch of the api-docs repo on GitHub. On Mac/Linux, this step might look something like this:
```shell
cp -R build/* docs
git add .
git commit -m "publish changes"
git push
```
Note, if you don't have permissions to push to `master` branch of the `api-docs` repo, you'll need to push to a branch or fork of it, then make a Pull Request to have your changes merged to `master` branch.<br><br>
Hint: If you haven't yet committed your changes to markdown (`.md`) files, and you want to review all your changes using git utilities like `git status` and `git diff`, you can exclude all the changes in the `docs` folder from being considered by these tools by temporarily adding `docs/` to the `.gitignore` file.
