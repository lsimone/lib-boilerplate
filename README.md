# [WIP] boilerplate lib project



## [TBD] installation

`npm i -S git+ssh://git@stash.musement.com:7999/mfe/i18n.git`


## [TBD] API

```
import {load} from 'i18n'

/**
 * loads in the inner cache the content of the xliff files contained in the given <folder>, for the given <files> and <languages>
 *
 * @param {String} folder - path of the folder containing xliff files
 * @param {String[]} files - name of files (weblate projects) without extension (i.e: 'website' for 'container_folder/website.xliff'
 * @param {String[]} languages - languages prefix (i.e: ['it', 'uk'] )
 * @return {Promise.<>}
 */

load(folder, files, languages)
```

## TESTS

```$xslt
npm test
```


## CONTRIB

This module is written in es6 and transpiled in es5 for standard purposes.
`dist` folder is generated through:

```
npm run build
```

Remember to run it before creating a new commit.

