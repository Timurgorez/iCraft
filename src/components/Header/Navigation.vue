<template>
  <b-row class="header-main__nav">
    <div class="header-main__wrap-link">
      <ul class="header-main__ul">
        <li class="header-main__li" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
          <a href="#" class="nav-link">Jewelry</a>
          <div class="header-main__wrap-sublink">
            <b-row>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Women’s Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-1.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Men’s Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-2.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Kids & Baby Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-3.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Category</h3>
                <ul>
                  <li><a href="#">Anklets</a></li>
                  <li><a href="#">Brooches & Pins</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Chains</a></li>
                  <li><a href="#">Chokers</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Hair Pins</a></li>
                  <li><a href="#">Necklaces</a></li>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Brooches, Pins & Clips</a></li>
                  <li><a href="#">Beach Jewelry</a></li>
                  <li><a href="#">Nature Jewelry</a></li>
                  <li><a href="#">Silver Hoops</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="4" class="mb-3">
                <b-row>
                  <b-col>
                    <h3>Women’s Jewelry</h3>
                  </b-col>
                  <div class="grid-img__row">
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/1.jpg" />
                    </div>
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/2.jpg" />
                    </div>
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/3.jpg" />
                      <img src="@/assets/nav/grid1/4.jpg" />
                    </div>
                  </div>
                </b-row>
                <b-row>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/handmade.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/exclusive.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/trusted.svg" alt=""></li>
                    </ul>
                  </b-col>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/new-updated.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/made-in-canada.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/authentic-indigenous.svg" alt=""></li>
                    </ul>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </li>
        <li class="header-main__li" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
          <a href="#" class="nav-link">Clothing</a>
          <div class="header-main__wrap-sublink">
            <b-row>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Women’s Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-1.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Men’s Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-2.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Kids & Baby Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-3.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Category</h3>
                <ul>
                  <li><a href="#">Anklets</a></li>
                  <li><a href="#">Brooches & Pins</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Chains</a></li>
                  <li><a href="#">Chokers</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Hair Pins</a></li>
                  <li><a href="#">Necklaces</a></li>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Brooches, Pins & Clips</a></li>
                  <li><a href="#">Beach Jewelry</a></li>
                  <li><a href="#">Nature Jewelry</a></li>
                  <li><a href="#">Silver Hoops</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="4" class="mb-3">
                <b-row>
                  <b-col>
                    <h3>Women’s Jewelry</h3>
                  </b-col>
                  <div class="grid-img__row">
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/1.jpg" />
                    </div>
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/2.jpg" />
                    </div>
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/3.jpg" />
                      <img src="@/assets/nav/grid1/4.jpg" />
                    </div>
                  </div>
                </b-row>
                <b-row>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/handmade.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/exclusive.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/trusted.svg" alt=""></li>
                    </ul>
                  </b-col>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/new-updated.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/made-in-canada.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/authentic-indigenous.svg" alt=""></li>
                    </ul>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </li>
        <li class="header-main__li" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
          <a href="#" class="nav-link">Accessories</a>
          <div class="header-main__wrap-sublink">
            <b-row>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Women’s Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-1.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Men’s Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-2.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Kids & Baby Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-3.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Category</h3>
                <ul>
                  <li><a href="#">Anklets</a></li>
                  <li><a href="#">Brooches & Pins</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Chains</a></li>
                  <li><a href="#">Chokers</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Hair Pins</a></li>
                  <li><a href="#">Necklaces</a></li>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Brooches, Pins & Clips</a></li>
                  <li><a href="#">Beach Jewelry</a></li>
                  <li><a href="#">Nature Jewelry</a></li>
                  <li><a href="#">Silver Hoops</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="4" class="mb-3">
                <b-row>
                  <b-col>
                    <h3>Women’s Jewelry</h3>
                  </b-col>
                  <div class="grid-img__row">
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/1.jpg" />
                    </div>
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/2.jpg" />
                    </div>
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/3.jpg" />
                      <img src="@/assets/nav/grid1/4.jpg" />
                    </div>
                  </div>
                </b-row>
                <b-row>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/handmade.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/exclusive.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/trusted.svg" alt=""></li>
                    </ul>
                  </b-col>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/new-updated.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/made-in-canada.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/authentic-indigenous.svg" alt=""></li>
                    </ul>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </li>
        <li class="header-main__li" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
          <a href="#" class="nav-link">Home Decor</a>
          <div class="header-main__wrap-sublink">
            <b-row>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Women’s Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-1.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Men’s Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-2.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Kids & Baby Jewelry</h3>
                <img
                  class="main-category-img"
                  src="@/assets/nav/im-3.jpg"
                  alt=""
                />
                <ul>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Jewelry Sets</a></li>
                  <li><a href="#">Necklaces & Chokers</a></li>
                  <li><a href="#">Bridal Jewelry</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Category</h3>
                <ul>
                  <li><a href="#">Anklets</a></li>
                  <li><a href="#">Brooches & Pins</a></li>
                  <li><a href="#">Bracelets</a></li>
                  <li><a href="#">Chains</a></li>
                  <li><a href="#">Chokers</a></li>
                  <li><a href="#">Earrings</a></li>
                  <li><a href="#">Hair Pins</a></li>
                  <li><a href="#">Necklaces</a></li>
                  <li><a href="#">Rings</a></li>
                  <li><a href="#">Brooches, Pins & Clips</a></li>
                  <li><a href="#">Beach Jewelry</a></li>
                  <li><a href="#">Nature Jewelry</a></li>
                  <li><a href="#">Silver Hoops</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="4" class="mb-3">
                <b-row>
                  <b-col>
                    <h3>Women’s Jewelry</h3>
                  </b-col>
                  <div class="grid-img__row">
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/1.jpg" />
                    </div>
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/2.jpg" />
                    </div>
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid1/3.jpg" />
                      <img src="@/assets/nav/grid1/4.jpg" />
                    </div>
                  </div>
                </b-row>
                <b-row>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/handmade.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/exclusive.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/trusted.svg" alt=""></li>
                    </ul>
                  </b-col>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/new-updated.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/made-in-canada.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/authentic-indigenous.svg" alt=""></li>
                    </ul>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </li>
        <li class="header-main__li" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
          <a href="#" class="nav-link">Bath & Body</a>
        </li>
        <li class="header-main__li" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
          <a href="#" class="nav-link">Toys & Games</a>
        </li>
        <li class="header-main__li header-main__li-more" @mouseover="showSubMenu" @mouseleave="hideSubMenu">
          <a href="#" class="nav-link">More<span class="down-icon"></span></a>
          <div class="header-main__wrap-sublink">
            <b-row>
              <b-col cols="12" lg="2" class="mb-3 border-right-grey">
                <h3>Shop Collections</h3>
                <ul>
                  <li><a href="#">Stunning Jewelry</a></li>
                  <li><a href="#">Kids, Hand-Knitted</a></li>
                  <li><a href="#">Spring & Summer</a></li>
                  <li><a href="#">Fun & Games</a></li>
                  <li><a href="#">Casual Wear</a></li>
                  <li><a href="#">Affordable Gifts</a></li>
                  <li><a href="#">Spring & Summer</a></li>
                  <li><a href="#">Gift Ideas for the Home...</a></li>
                  <li><a href="#">View all</a></li>
                </ul>
                <h3>Browse Stores</h3>
                <ul>
                  <li><a href="#">Jewelry Stores</a></li>
                  <li><a href="#">Clothing Stores</a></li>
                  <li><a href="#">New & Updated</a></li>
                  <li><a href="#">Canadian Sellers</a></li>
                  <li><a href="#">US Sellers</a></li>
                  <li><a href="#">Top Sellers</a></li>
                  <li><a href="#">Trendsetters</a></li>
                  <li><a href="#">View all</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3">
                <h3>Shop for Someone</h3>
                <ul>
                  <li><a href="#">Men</a></li>
                  <li><a href="#">Women</a></li>
                  <li><a href="#">Baby</a></li>
                  <li><a href="#">Kids</a></li>
                  <li><a href="#">Girls</a></li>
                  <li><a href="#">Boys</a></li>
                  <li><a href="#">Parents</a></li>
                  <li><a href="#">Mothers</a></li>
                  <li><a href="#">Fathers</a></li>
                </ul>
                <h3>Shop by Style</h3>
                <ul>
                  <li><a href="#">Athletic</a></li>
                  <li><a href="#">Casual</a></li>
                  <li><a href="#">Contemporary</a></li>
                  <li><a href="#">Minimalistic</a></li>
                  <li><a href="#">Feminine</a></li>
                  <li><a href="#">Edgy</a></li>
                  <li><a href="#">Funny</a></li>
                  <li><a href="#">Wimsical</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3 border-right-grey">
                <h3>&nbsp;</h3>
                <ul>
                  <li><a href="#">Couples</a></li>
                  <li><a href="#">Animal Lovers</a></li>
                  <li><a href="#">Cat Lovers</a></li>
                  <li><a href="#">Dog Lovers</a></li>
                  <li><a href="#">Gardeners</a></li>
                  <li><a href="#">Fishermen</a></li>
                  <li><a href="#">Music Lovers</a></li>
                  <li><a href="#">Wine Lovers</a></li>
                  <li><a href="#">Doctors/Nurses</a></li>
                </ul>
                <h3>&nbsp;</h3>
                <ul>
                  <li><a href="#">Glam</a></li>
                  <li><a href="#">Country</a></li>
                  <li><a href="#">Romantic</a></li>
                  <li><a href="#">Classic</a></li>
                  <li><a href="#">Victorian</a></li>
                  <li><a href="#">Bohemian</a></li>
                  <li><a href="#">Modern</a></li>
                  <li><a href="#">Vintage Inspired</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="2" class="mb-3 border-right-grey">
                <h3>Holidays & Occasions</h3>
                <ul>
                  <li><a href="#">Mothers Day Gifts</a></li>
                  <li><a href="#">Birthday Gifts</a></li>
                  <li><a href="#">Wedding Gifts</a></li>
                  <li><a href="#">Party Gifts</a></li>
                  <li><a href="#">Housewarming Gifts</a></li>
                  <li><a href="#">Greeting Cards</a></li>
                  <li><a href="#">Prom Fashion</a></li>
                  <li><a href="#">Beach Vacation</a></li>
                </ul>
                <h3>Trending</h3>
                <ul>
                  <li><a href="#">Outdoor Swings</a></li>
                  <li><a href="#">Spring & Summer Fashion</a></li>
                  <li><a href="#">Items in Bright Colors</a></li>
                  <li><a href="#">Flower Themed</a></li>
                  <li><a href="#">Summer Dresses</a></li>
                  <li><a href="#">Skirts & Shorts</a></li>
                  <li><a href="#">Sandals</a></li>
                </ul>
              </b-col>
              <b-col cols="12" lg="4" class="mb-3 pl-5">
                <b-row>
                  <b-col cols="12">
                    <h3>New Arrivals</h3>
                  </b-col>
                  <div class="grid-img__row" style="width: 33%">
                    <div class="grid-img__column">
                      <img src="@/assets/nav/grid2/1.jpg" />
                      <img src="@/assets/nav/grid2/5.jpg" />
                    </div>
                  </div>
                  <div class="grid-img__row" style="width: 66%">
                    <div class="grid-img__row" style="width: 100%">
                      <div class="grid-img__column">
                        <img src="@/assets/nav/grid1/2.jpg" />
                      </div>
                      <div class="grid-img__column">
                        <img src="@/assets/nav/grid1/3.jpg" />
                        <img src="@/assets/nav/grid1/4.jpg" />
                      </div>
                    </div>
                    <div class="grid-img__row" style="width: 100%">
                      <div class="grid-img__column" style="width: 100%">
                        <img src="@/assets/nav/grid2/6.jpg" />
                      </div>
                    </div>
                  </div>
                  
                </b-row>
                <b-row>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/new-updated.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/onSale.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/justSold.svg" alt=""></li>
                    </ul>
                  </b-col>
                  <b-col cols="12" md="6">
                    <ul class="product-labels">
                      <li><img src="~@/assets/product_labels/trending.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/ecoFriendly.svg" alt=""></li>
                      <li><img src="~@/assets/product_labels/authentic-indigenous.svg" alt=""></li>
                    </ul>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </div>
        </li>
      </ul>
      <a href="#" class="nav-link without-line nav-link__community"><span></span>Community</a>
    </div>
  </b-row>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {
    showSubMenu(e){
      const submenu = e.target.closest('.header-main__li').querySelector('.header-main__wrap-sublink');
      if(submenu) submenu.style.maxHeight = submenu.querySelector('.row').clientHeight + "px";
    },
    hideSubMenu(e){
      const submenu = e.target.closest('.header-main__li').querySelector('.header-main__wrap-sublink');
      if(submenu) submenu.style.maxHeight = "0px";
    }
  }
};
</script>

<style scoped lang="scss">
.border-right-grey:after {
  content: "";
  display: block;
  width: 1px;
  height: 95%;
  position: absolute;
  right: 15px;
  top: 30px;
  background: #d7d7d7;
  // border-right: 1px solid #d7d7d7;
}
.header-main__nav {
  position: relative;
  width: 100%;
  .header-main__wrap-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: $bg_purple;

    .header-main__ul {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      height: 100%; 
    }
    .header-main__li {
      display: flex;
      align-items: center;
      height: 100%; 
      &:hover {
        background: $red_color_btn;
        .header-main__wrap-sublink {
          // max-height: 1000px;
          transition: all 0.4s;
        }
      }
      &:last-child .nav-link:after {
        display: none;
      }
    }
    .nav-link {
      padding: 1.2rem 2rem;
      position: relative;
      font-family: $font_montserrat_semi_bold;
      font-size: 16px;
      font-weight: 600;
      color: #ffffff;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      .down-icon {
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='26' height='26' viewBox='0 0 26 26'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath fill='%23FFF' d='M7.41 8.59L12 13.17 16.59 8.59 18 10 12 16 6 10z' transform='translate(-1205 -173) translate(0 150) translate(1205 23) translate(1 1)'/%3E%3Cpath d='M0 0L24 0 24 24 0 24z' transform='translate(-1205 -173) translate(0 150) translate(1205 23) translate(1 1)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
        background-size: cover;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        display: inline-block;
        width: 26px;
        height: 10px;
        margin-left: 20px;
      }
      &:after {
        content: "";
        display: block;
        width: 1px;
        height: 19px;
        background: #fff;
        position: absolute;
        right: 0;
        top: calc(50% - 9.5px);
      }

      &:hover {
        background: $red_color_btn;
        .nav-link {
          opacity: 1;
        }
        &:after {
          display: none;
        }
      }
      &:hover {
        background: $red_color_btn;
        opacity: 1;
      }
      &.without-line:after {
        display: none;
      }
    }
  }

  .header-main__wrap-sublink {
    max-height: 0;
    overflow: hidden;
    
    background: #fff;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    transition: all 0.4s;
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    & > .row{
      padding: 10px 25px 35px 25px;
    }
    .main-category-img {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
      max-width: 230px;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    a {
      font-family: $font_montserrat_regular;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.13;
      letter-spacing: normal;
      color: $text_color;
      padding-right: 15px;
    }
    h3 {
      font-family: $font_montserrat_regular;
      font-size: 22px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #000000;
      margin-bottom: 21px;
      margin-top: 26px;
      display: inline-block;
      min-height: 27px;
      padding-right: 10px;
    }
  }
}

.grid-img__row {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  max-width: 510px;
}

/* Create two equal columns that sits next to each other */
.grid-img__column {
  flex: 30%;
  padding: 0 10px;
}

.grid-img__column img {
  margin-top: 8px;
  vertical-align: middle;
  margin-bottom: 13px;
  width: 100%;
  height: auto;
}

.product-labels{
  margin-top: 30px;
  li{
    margin-bottom: 20px;
  }
}
.header-main__nav .header-main__wrap-link .nav-link__community{

  span{
    background-image: url("~@/assets/nav/community.png");
    width: 32px;
    height: 32px;
    display: block;
    display: inline-block;
    margin-right: 20px;
  }
}




@media only screen and (max-width: 1300px) {
.header-main__nav {
  .header-main__wrap-link {
    .nav-link {
      padding: 1.2rem 1.5rem;
      font-size: 14px;
    }
  }
}
}

</style>
