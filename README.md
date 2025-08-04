# Fretio App Support Website

This is the official support website for the Fretio guitar learning app, designed to comply with Apple App Store Review Guidelines.

## Files Structure

```
website/
├── index.html          # Main homepage with app features and support
├── privacy.html        # Privacy Policy (required for App Store)
├── terms.html          # Terms of Service
├── styles.css          # CSS styling for all pages
├── screenshots/        # App screenshots folder
│   ├── iphone-1.png
│   ├── iphone-2.png
│   └── ... (10 screenshots total)
└── README.md          # This file
```

## Features

### ✅ App Store Compliance
- **Privacy Policy**: Comprehensive privacy policy covering data collection, usage, and user rights
- **Terms of Service**: Legal terms for app usage
- **Support Information**: Contact details and FAQ section
- **App Description**: Clear description of app features and functionality

### ✅ User Experience
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Fast Loading**: Optimized images and minimal dependencies
- **Accessibility**: Semantic HTML and good contrast ratios
- **SEO Friendly**: Proper meta tags and structured content

### ✅ Content Sections
1. **Hero Section**: App introduction and call-to-action
2. **Features**: Key app functionality descriptions
3. **Screenshots**: Visual showcase of the app interface
4. **Support**: FAQ, contact information, and technical requirements
5. **Legal Pages**: Privacy policy and terms of service

## Deployment

### Option 1: GitHub Pages
1. Push this website folder to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Select the website folder as the source
4. Your site will be available at `https://username.github.io/repository-name`

### Option 2: Netlify
1. Drag and drop the website folder to Netlify
2. Your site will be deployed instantly with a custom URL
3. You can configure a custom domain if needed

### Option 3: Other Static Hosting
This website works with any static hosting service:
- Vercel
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## Customization

### Update Contact Information
Replace placeholder email addresses in:
- `index.html` (support section)
- `privacy.html` (contact section)
- `terms.html` (contact section)

### Add App Store Link
Update the "Download on App Store" button in `index.html` with your actual App Store URL when available.

### Screenshots
The website references screenshots in the `screenshots/` folder. Currently includes:
- iphone-1.png through iphone-10.png
- Images are displayed in a responsive grid
- Optimized for fast loading with lazy loading

## App Store Review Guidelines Compliance

This website meets Apple's requirements for app support websites:

1. **Clear App Description**: ✅ Detailed feature descriptions
2. **Privacy Policy**: ✅ Comprehensive privacy policy
3. **Contact Information**: ✅ Support email and response time
4. **Terms of Service**: ✅ Legal terms and conditions
5. **Age Appropriateness**: ✅ Suitable for all ages content
6. **Technical Requirements**: ✅ iOS version and device compatibility
7. **Support Information**: ✅ FAQ and troubleshooting

## Technical Details

- **Framework**: Pure HTML, CSS, and minimal JavaScript
- **Responsive**: Mobile-first design with CSS Grid and Flexbox
- **Performance**: Optimized images, minimal HTTP requests
- **Browser Support**: Modern browsers (Chrome, Safari, Firefox, Edge)
- **Load Time**: < 3 seconds on average connections

## Maintenance

To keep the website compliant and current:

1. **Regular Updates**: Update privacy policy and terms when app features change
2. **Screenshot Updates**: Replace screenshots when UI changes significantly  
3. **Contact Monitoring**: Ensure support email is monitored and responsive
4. **Legal Review**: Periodically review legal pages for compliance

## License

This website template is created for the Fretio app. Modify as needed for your specific app requirements.