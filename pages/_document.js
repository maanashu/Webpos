import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBbytCk92gm3MK3Mrs_374RDKf4bz0X1ck&libraries=places"
          async defer></script>
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/js/fontawesome.min.js" integrity="sha512-UtDq4PkcIa4+JFzeH6jzQbqbGoeUw+L0tX62xiixM0cajUZArxeG1AyPyTbcTRet8BzDyLaLhoKqWCpv+auMvg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/5.4.7/antd.min.js" integrity="sha512-pTO+IXhxR1Jc0ETkfub+nYHRtueeD+xNCKNiXJHDzZ0cSLYRsqDzRRUBOnD2dmyaXa1vx4m55S6+17mr/ROLqA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
      </body>
    </Html>
  )
}
