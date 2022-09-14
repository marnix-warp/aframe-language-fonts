# aframe-language-fonts

## Basic font information
- All fontsets include basic latin:
```
! "#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^`abcdefghijklmnopqrstuvwxyz{|}~
```


### Generate fonts
see [Unicode charts](https://www.unicode.org/charts/) for an overview of all international scripts.
#### Requirements
1. npm install -g msdf-bmfont
1. a charset.txt file
1. a .ttf or .otf font containing all chars from charset.txt

#### How to use
1. create a folder based on the script:
    * e.g. cyrillic
1. make a charset.txt file containing all characters    
    * see helpers/codes.json for the selected charset hex-range
    * add the basic latin from line 6 to the charset.txt file
1. run command below:

``` msdf-bmfont -f json -i ./charset.txt -m 8000,8000 --smart-size ./font-cjk.ttf ```

* -f json generates the fonts' json.
* where charset.txt is a textfile containing all required chars. 
* where font-cjk.ttf can be replaced by any other font.
* -m 8000,8000 sets a very large default size for the png
* --smart-size flag is required to autoscale the generated png to the correct size

