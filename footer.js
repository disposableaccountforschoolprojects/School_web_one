let footerContent = `
<footer>
            <img class="footer_img" src="images/logo.png" alt=" LOGO">
            <h2 class="slogan">The hottest unique gear - for YOU!</h2>
        </footer>
`;
document    
  .querySelector("#footer_con")
  .insertAdjacentHTML("beforeend", footerContent);
