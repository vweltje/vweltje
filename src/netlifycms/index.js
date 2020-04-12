import CMS from "netlify-cms-app"
import uploadcare from "netlify-cms-media-library-uploadcare"

CMS.registerMediaLibrary(uploadcare)

CMS.init({
  config: {
    backend: {
      name: "git-gateway"
    }
  }
})
