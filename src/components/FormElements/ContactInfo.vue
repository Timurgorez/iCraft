<template>
  <section class="contact-info mt-4">
    <h3>Your Contact Info</h3>
    <form>
      <b-container class="contact-info__container">
        <b-row class="mb-2">
          <b-col cols="6">
            <div class="d-flex flex-row">
                <label class="name-label" for="input-name">First Name</label>
                <b-form-input id="input-name" placeholder="Enter first name"></b-form-input>
            </div>
          </b-col>
          <b-col cols="6">
            <div class="d-flex flex-row">
                <label for="input-surname">Last Name</label>
                <b-form-input id="input-surname" size="sm" placeholder="Enter last name"></b-form-input>
            </div>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="12">
            <div class="d-flex align-items-center">
              <label for="input-email">Email</label>
              <b-form-input id="input-email" size="sm" placeholder="Enter your email"></b-form-input>
              <div class="custom-request__hint" id="popover-save__hint"></div>
              <b-popover
                  custom-class="custom-popover"
                  target="popover-save__hint"
                  triggers="hover"
              >
                Your security code is a three digt number on the back of your credit card.
              </b-popover>
            </div>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col cols="12">
            <div class="d-flex align-items-center">
              <label class="phone-label" for="input-phone">Phone (optional)</label>
              <b-form-input id="input-phone" size="sm" type="tel" placeholder="XXX-XXX-XX-XX"></b-form-input>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </form>
  </section>
</template>

<script>
export default {
name: "ContactInfo"
}
</script>

<style scoped lang="scss">
.contact-info {
  input {
    border-radius: 3px;
    border: solid 1px #909090;
    &:focus {
      border-radius: 3px;
      border: solid 1px #909090;
      box-shadow: none;
    }
  }

  &__container {
    margin-left: -22px;
  }

  h3 {
    font-family: $font_montserrat_medium;
    font-size: 22px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
  }

  label {
    font-family: $font_montserrat_regular;
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.11;
    letter-spacing: normal;
    margin: 10px;
  }
  input {
    font-family: $font_montserrat_regular;
    font-size: 16px;
    border-radius: 3px;
    border: solid 1px #909090;
    color: #5f5f5f;
    height:  45px;
    margin: 10px 0 10px 10px;
  }

  .custom-request__hint {
    margin-right: -20px;
    width: 25px;
    height: 18px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='19' viewBox='0 0 18 19'%3E%3Cg fill='none' fill-rule='evenodd' transform='translate(0 .5)'%3E%3Ccircle cx='9' cy='9' r='9' fill='%237F13A6'/%3E%3Cpath fill='%23FFF' fill-rule='nonzero' d='M9.68 10.384c0-.275.07-.511.211-.71.141-.198.357-.427.647-.687.237-.214.428-.403.573-.567.145-.164.27-.365.372-.601.103-.237.155-.512.155-.825 0-.65-.254-1.159-.762-1.53-.508-.37-1.19-.555-2.045-.555-.702 0-1.313.12-1.832.36-.52.241-.943.587-1.272 1.038l1.111.721c.42-.588 1.043-.882 1.867-.882.436 0 .783.1 1.043.298.26.199.39.458.39.779 0 .229-.068.433-.201.613-.134.18-.338.391-.613.635-.359.321-.632.617-.819.888-.187.271-.28.613-.28 1.025h1.454zm-.723 2.738c.26 0 .476-.086.648-.258.171-.172.257-.383.257-.635s-.086-.462-.257-.63c-.172-.168-.388-.252-.648-.252-.267 0-.486.084-.658.252-.172.168-.258.378-.258.63s.086.463.258.635c.172.172.391.258.658.258z'/%3E%3C/g%3E%3C/svg%3E%0A");
    position: relative;
    top: 5px;
    left: 8px;
  }

  .name-label {
    padding-right: 17px;
  }

  .phone-label {
    margin-right: -34px;
  }

  #input-email {
    margin-left: 38px;
  }
}
</style>