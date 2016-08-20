# WebPack loader for UML


## Config

Simply add configuration object to module.loaders like this.

```
      {
        test: /\.uml$/,
        loader: 'babel?presets[]=es2015,presets[]=react!svg-react!plantum?format=svg'
      }
```

## Options:

 - format - everything that -t plantuml.jar supports. (txt, utxt, png, svg)
 - no-docker - this module use docker think/plantuml for generation svg. If you specify this option, loader will try to use local java and plantuml.jar
