# Image-Sharing
Created a simple React application that displays a random image in the center of the page each time the page is refreshed. Include a share button under the image that allows users to share the current image on Facebook, Twitter, and WhatsApp. 

Deployed URL - https://image-display.netlify.app/

![Screenshot from 2023-07-11 16-13-12](https://github.com/Snach13/Image-Sharing/assets/97365258/02596d59-fe17-423b-9f61-1e0b7f05f496)

I tried to add the meta tags with the react-helmet package but twitter no longer support Imagee Preview And it didnt work

```

 <Helmet>
        <meta property="og:image" content={imageUrl} />
        <meta property="og:title" content="Random Image Display" />
        <meta
          property="og:description"
          content="Displaying a random image each time the page is refreshed."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Random Image Display" />
        <meta
          name="twitter:description"
          content="Displaying a random image each time the page is refreshed."
        />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>

```
