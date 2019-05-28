'use strict';
module.exports = {
  get: () => {
    return Promise.resolve({
      data: {
        "url": "https:\/\/www.nytimes.com\/interactive\/2019\/05\/07\/us\/politics\/donald-trump-taxes.html",
        "byline": "By RUSS BUETTNER and SUSANNE CRAIG",
        "title": "Decade in the Red: Trump Tax Figures Show Over $1 Billion in Business Losses",
        "abstract": "Newly obtained tax information reveals that from 1985 to 1994, Donald J. Trump\u2019s businesses were in far bleaker condition than was previously known.",
        "published_date": "2019-05-07",
        "source": "The New York Times",
        "media": [
          {
            "type": "image",
            "subtype": "photo",
            "caption": "Donald J. Trump in 1986, during a tumultuous period of his career marked by acquisition and collapse.",
            "media-metadata": [
              {
                "url": "https:\/\/static01.nyt.com\/images\/2019\/03\/20\/obituaries\/archives\/00trump-ice\/00trump-ice-square320-v5.jpg",
                "format": "square320",
                "height": 320,
                "width": 320
              },
              {
                "url": "https:\/\/static01.nyt.com\/images\/2019\/03\/20\/obituaries\/archives\/00trump-ice\/00trump-ice-thumbStandard-v4.jpg",
                "format": "Standard Thumbnail",
                "height": 75,
                "width": 75
              }
            ]
          }
        ]
      }
    });
  }
};