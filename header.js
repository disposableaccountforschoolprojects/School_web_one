let headerContent = `
<header>
            <a href="index.html" >
            <img class="logo" src="images/logo_small.png" alt=" LOGO">   
            </a>
            <nav class="header_nav">
                <a class="header_nav_button" href="index.html" >Home</a>
                <a class="header_nav_button" href="products.html" >Shop</a>
                <a class="header_nav_button" href="contact.html" >Contacts</a>
            </nav>
        </header>
`;
document
  .querySelector("#header_con")
  .insertAdjacentHTML("beforeend", headerContent);
