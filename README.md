# Blocknet API Documentation

This repository contains the source code for [Blocknet's API documentation](https://api.blocknet.co).

> Powered by [Slate Docs](https://github.com/lord/slate).




## Getting Started

Using Linux or MacOS:

```shell
# either run this to run locally
bundle install
bundle exec middleman server

# OR run this to run with vagrant
vagrant up
```

If you'd prefer to use Docker, instructions are available [in the wiki](https://github.com/lord/slate/wiki/Docker).

You can now see the docs at http://localhost:4567. This will reload automatically when changes are saved.




## Editing

* __Syntax__ - These documents use [Markdown syntax](https://github.com/lord/slate/wiki/Markdown-Syntax).
* __Content__ - For better maintenance, the content is composed of separate files in `source/includes/`. Add new files to the docs by including the file name under `includes:` in `source/index.html.md`. This also adds the content as a menu item.
* __Layout__ - The page template is managed with `source/layouts/layout.erb` and `source/stylesheets/`.

[See full wiki](https://github.com/lord/slate/wiki).




## Publishing

1. Add notes to `source/includes/_changelog.md`.
	1. Use the following header:
		```
		M/D/YYY    <small>([view version](https://api.blocknet.co/v/M-D-YYYY/))</small> |
		---------- |
		```
	1. Replace `M/D/YYY` and `M-D-YYYY` with publishing date in said formats.
	1. See past changelog entries for reference.
1. Build the docs with the `bundle exec middleman build` command.
1. Create a folder in `source/v/` with the publishing date in `M-D-YYYY` format.
1. Copy the contents of `build/` (not including `v/`) into this new folder.
1. Build the docs with the `bundle exec middleman build` command.
1. Deploy `build/` contents to staging site for testing.
1. Deploy `build/` contents to [https://api.blocknet.co/](https://api.blocknet.co/).



