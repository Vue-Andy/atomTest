<template>
  <div class="main-nav flex-column">
    <div class="main-nav__logo">
      <img :src="logo">
    </div>

    <div class="main-nav__main flex-1">
      <ul class="main-nav__list">
        <li
          @click="menuChange(index + 1)"
          v-for="(item,index) in menuList"
          v-bind:class="{ liActive:index == current}">
          <span :class="`nav-icon icon-${item.authName}`">
            {{item.authDesc}}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "jpcMenu",
    props: {
      menuList: Array,
      current: Number,
      menuChange: Function
    },
    data() {
      return {
        logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsSAAALEgHS3X78AAABwUlEQVRYhe2Y0VGEQAyGfx3fpQMtgQ68EuzAK+GuAzqQEs4OKOFKODvgOsAK4jCz6EKSZXcJI45+M3kJsPdfyGYTbogIW+Z20+p+g8A75vlmxzxjLgA65uWUAArmHdM64/Q5KNiJ5mmJ6Fl4drCCiJqIdXo6IiqFNVSBsXROiLRGzJ/0qYQ1FufgPYAD8wKPAF6YNwOLTXIQcqxid/2gwGkUC6vowbDM+FGUXnk2VgL9KM6VpyQsC7WUi5sSOETxxK4swPqo2zuBV3YlE03gG/PE8eBE5pSZC/MACLVbUrL35+or8465ukLdOsESx4mgThPIjpYIq9khxdk7k6hTfk97xSFiOpgqkIsxz3+xVj+4JBdHrNmw7i1Kzp9u+c9KJUgi1PIv4QNADaBZutBaEaxdzXxiV1KRak/AStfmhxjGgLNyjzp/SCY6A0U2drbYMW8YVTRzJA5NU+aiF2KVoWm93HNY7uJh5262H6zdOWvaVVsJHKIH9RNGJlYCa69LMZuJYSTQjx5cBHM7coaFwEbo8Tb1ZUESYxZFTWDs4sfApuiFvzOvjjiTpA5NPvpHx7R1EBqaQgI3gfaK/wVGAeAT/F6SOLEl7cIAAAAASUVORK5CYII="
      }
    }
  }
</script>

<style scoped>
  /**
   * 左侧主导航
   */
  .main-nav {
    height: 100%;
    width: 100%;
  }

  .main-nav__logo {
    height: px(50);
    width: 100%;
    text-align: center;
    font-size: 0;
  }
  .main-nav__logo img{
    display: inline-block;
    height: px(32);
    width: px(32);
    margin-top: px(9);
  }
  .main-nav__main {
    overflow-y: auto;
  }
  .main-nav__main .main-nav__list{
    width: 100%;
  }
  .main-nav__main .main-nav__list > li{
    width: 100%;
    color: #FFF;
    cursor: pointer;
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;
    height: px(40);
    line-height: px(40);
  }
  .main-nav__main .main-nav__list > li.liActive{
    background: #329461;
  }
  .main-nav__main .main-nav__list > li:hover{
    background: #329461;
  }
  .nav-icon {
    display: inline-block;
    padding-left: 28px;
    background-size: 18px 19px;
    background-repeat: no-repeat;
    background-position: left center;
  }

  /* 商品 */
  .icon-productCenter {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAQ9JREFUOBHVk68PQWEUhl0j0BiCH0FUJFMRNIo/wybRMJtNkSRFEsx0f4BOJuiS2QSbdj2H+xmXy5VwtmfnfOe833vvd384HL8WmrohXdfz1G3wqd6bHGFe1DRtJrqzESYJ6iWUYAV2IoloAmnM5ucNGNWhZ2f3rYY9XWhIz2kMXOS9UX+SDojdskEMHoKrFGj6HwaXxo6jTM2zp0aIshAwi431lmzPiCvWLEws2+oZWQrsDv7UiLfofXfEl0fDIAR9TBbkzCszZSQfY1AJ5Q6gyVp+lyNUYEhvAlFqFTkK+SgvwTABEgMowwbGEL/ReFi3YAt9EGOJ+2PTCMMaRpBSBubMLAZV6MD1FGbd99cn6xSPz63vXcUAAAAASUVORK5CYII=)
  }

  /* 采购 */
  .icon-purchase {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAPZJREFUOBHNkz0KwkAQhY34E0QiWHgQLTyFKHgKS8HOM4hey8LGwlJLwd5CNMZvZCeJMQlJFHHgMbtv5r3Z3ZBS6Vfhed7w41mYrMAZzAubGZM12QW7QmYhE4e1RAfkM0MwAXISR65D9kxWs3Gma6JrAVub1ciYNdk3tJYrh43ShOW0Yp7a04ipXdBLEM7i+KimYpoGZDHdREWWZS2inNm/aL57NSaIoZswOYm+U7C0qCc6QPSVzJjlHxRdEDycDY5gCmpB5X0ldbAEElXt8I8G2YbcAzG6aUNMlltswYgPcdK6byQEZtIkU+qyT4gL/BUTeaM/jgcus6JJBDkN7QAAAABJRU5ErkJggg==)
  }

  /* 仓库 */
  .icon-warehouseManage {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAUJJREFUOBHVk79LQlEUx31iSEIIz6mhQXGxKWtta46mIBwFJxHcnESiMRfXAkehpf8hQgJHJ5dqEEQQJ4eHi6/PuTz13dd94Y+pAx/uPef7Pcd7rxqJ/LtwXbcOn3Cy0+FpTEAHetCAEVxtNYyGLPThCeLSzHoJQ6htNAzjNYyhGGygdgzv8ApHQV3lCFF4gG+4MJoooh1ACwZwqvko2NCFD0hpYkiCrwBy8ltlYXMGX/AG9yF9xjL+R5hAM4bjHKqQhyioQLxjY3upf5lalvXiFWasz5CMUWxLkUYZ5I8ciemaU7+J/ZwZZTmRMRAbRkEvWqTqFqur6PrGmYtzIe59BxlPJEX5hG1C/NK3Dh77BiQy62r4Dl9aufkn/HIhVDxxxur8gejy+ykth+jHoop4yCJvpx5xaQysSuebdQL1/dMfKr/7p6jPLNYAAAAASUVORK5CYII=)
  }

  /* 订单 */
  .icon-order {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAQ1JREFUOBFjYBi2gBHms////7sC2U1ALAgTI0BLA+V9GRkZD4DUgQ0CGqIJZF8D4iAgvg7ExAA9oKKVQGwGNOw0WAPQoGognkCMbmQ1QD1dQFwDEmOBSoDoj1A2A1DSC8gWgvGh9DugzdvQxL4C+awgMZhBaPIMLkABETTBN0A+ukFwJVgNAtpcBFdBJAOrQUCv+QP1Y/PaRlzmYjUIqNgKiIXRNL0F8kkzCOi1cjRDCHKZCKogUgHMIBD9j0g9yMpAeuC5A5RuwoAYBPiRVeFjg9SCdfz/HwpSBw5sYJisAgqaA/kfgDQoUIkBoIRYB9S7GqQY4SwgB2QLkAKnVJAkAfAbaAg8NxBQOwDSANvAUIxJIwrnAAAAAElFTkSuQmCC)
  }

  /* 商城 */
  .icon-shop {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAR9JREFUOBHdk7tOAkEYhRkviRViaWxpbCh9A8ttILwCrS2J0lASC1t5A0N8B3t7fQTKDSQkFBuH72xmhAyzy5BY+Scn/2XOOZnLbqPxb8P4k1lr76nH4MrPDuQb1jNjzId4pREmt9RfoAu+QUp0IL2BO8w+SwFGj+AlRb3LQTMBT5qduIUz8sLVx6QV5HMJvNEx4ig3asR2B2AYKjTTWjhXHzVirkd4QHQqksLVGWVUEx3yCq8IdP4Cg7mgGlyDKdgLXXI0MGtjoG/qwhHWzPIomWGlkQR1wtAwerSQlNJ7I+WfFEHAkeb3N9OL9IGiFRArW7iXpcLankjlHXEXM4bP9Dm58kIDV2lHaN81326LBpMmqfYBJHJRYLL0zZ/lDWyMaJOY30CKAAAAAElFTkSuQmCC)
  }

  /* 保险 */
  .icon-insurance {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAaFJREFUOBG9kj0vBFEUhneE/SC7sa1YIlErVkGi8QO28gs2IVFoVCoK0UvQSIRFlBQKEiKhE/FVKVWyRITwAxjPO3vvNWtNRhRO8uTc8973nLlzZxKJ/wjf91tgFpJxz2uKMtDcyd4kdMM+dSHKKz0YhKkH8tABA7DA3jXkPc8rk0/hCn0RBkE++XvRa0HRBxfwDA9mPUPush5l6gJMwyXIJ7+GFwMfi3FYDjf9dk3fEkzIr1drhxcVf4g3enLq0yAfmlXEBU9PwzrYi9fXfFefBuk0OpULjEPQ6gQW1GnSLqinCgr3NhJvoF9qKEZY79lhoSGP6GW+5Ifxqk/9wZMyGF8heFejedQrcAz6zAewCXpwEKxzoL6M1XTsCkw5gQW1HfbEum6IfPJDJdwjsQj3kA1vUGvYHLiTmCFZtCrU/iFEz2wor4K+4Bh3oPxj0Gy92h9t8GJIwSFsQN0J7ER0nXALdGcpqzdkNnXxJ7D93agajuAMvi64YYoRMCXhHBTDkpXhFnYguA5jj080lOAO1kwuxXdFOBjQBvPKERYnfwJdBXt9G4TS2QAAAABJRU5ErkJggg==)
  }

  /* 设置 */
  .icon-system {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAZ5JREFUOBHNkjtLA0EUhbPxiYJGLUyCYKkiEkHxhWChhdYWQkoLwRAFBUHUFGJnlX+gla1iY2Fhnd5CCBEUsRBUguADhPG7685mdhh7L3zMueee3Z3dnVjs35dSKgE78AgzesPoaXgCmSW071wJTIHUMUzCHVSgDPcg86NAZ5w3EZOA1KYOoJuhH/qgxfBX6ZXuZa03G/QVXGvP87xP9I3ujbWCLhl9TcoToQrJmutWZLrhFcJd+kkM+R5fcGBeSj8Et1CCCWt2GMzG9U2WMaR2rWDq11bzrIuBjvwtvELgL8kH3oCieRPReGtwon30BazrXq94RdiKYzTBux4YayO6avRldIPRa/mBqJMn78MDDOqJrPQDIJWEHl8pNWxlxgJ/2/dp5LRKZa3gCt6LP1EqZ83mAj9v+rKDNDxD5PfTd0KXGaaXHyFHJW36oWZwCQuh8YcgI7uRw+suhlKz5pQ+Dp7ljUiQivhhhkEW5PVy0A6yQ3mFNziDVpDvJlUIL3QJAhk4lSSVhzbogD34hnMYdV3r9Aj32gO8lO3p/gf5RcmXJNkoPgAAAABJRU5ErkJggg==)
  }

  /* 财务 */
  .icon-financing {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAatJREFUOBGtlL0vQ2EUxnuFrfUVg0SIiIVRStAQg0UiJTT+BZO/wKASMZBYJJ0ZuhukC5uPRTBIGCS+F0kJkUbEUL+nvfd176uXxZP8cs55zjnvTW/71on8omKx6NDugSKcOo6jWFEaDIjlGowFaIRmGAMpB4/wDIsc+kkMFwfNwgPsQh5aXZ5cT71Z+4Rq26Cuh1ueOMpCHfFVM+QdyomH7ozscDHYCR8wAY6FPPU6w09wOwxVwQ6ESb0q+6DAy2YgxsAWdMEc3IBf7RTrcAGTfNQ3YlAcEoV9OIGWYPe7Ug+OQbPR746bYWbgGhp+NC2DmXq4gkyghdEH7xD3N6inQDqDlNWL42mnz/gUWdg0Bgn1MEgjMFTKfj5oAz9r9ijuYdoY5YPSeEueR74Maa9W1A7cGY+iAP3GKA+l8KRa0DuRZqyZAbyC8SguIWkMN8GbhxeQViv0k/iXxqfIwZoxfAl+TPgsk2oHdJnLokiAvoFBz/sratbdSWi2dGn5hR5grlDvEY+IeoFh/z26DW3QC0vaJUbsK9KNNw5Ndo/akx6Qh20OOffMf4tfcIudWPP1W9AAAAAASUVORK5CYII=)
  }

  /* CRM */
  .icon-CRM {
    padding-left: 25px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAFxJREFUOBFjYBhI8P///2Kq2A806D+6QUzoAuTyR7JBwHCtJTfcUPRhiyFsYrQJbKBNTSjOIZeDzcnEitHGa+T6BKSPZi76g8VVxIohtAIDVhvBg7CIFUPXN/B8APG6LtQzgMUHAAAAAElFTkSuQmCC)
  }

  /* 报价 */
  .icon-quote {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAUJJREFUOBHNkz9PAkEQxfeUCBKMiZUVPaExfgs7C0MMX0Ia7AwhsbK3NsFKC2PCJ9BKKxujLQUtFICJf6Ln7y2sucAex1X4krczOztvmB32jPlvCFxDYRhm8Pfhhosl2CHnN0EQ/CjPFqLICv4nfIZPcBFUSVqDWYpJawyFjuCH3aRY0DzCmiTqRNiCp9ZLt7QnWqO5CLqn821AC7+mqx9C2Suu8I2NYpVNqMCMOJqF/wq34Qs8hjvQi9hCdFNBUaSLvJTshQr7a18lNyPfWYngWeSgia+YF/MKdVE0IqoDfMW8mFfoQgqucwnvccuwpZgPsYWYhf7JTdiBd1AP7wvrReywlY1wgDnxKqeCrqM34mo9LfYQ6Jv7+9b0snvwAd7CRbBLkp7IOp2/68VaMNAcTh0WxpHEdUTGOUX6iZlLSfgFXCZTQcGMv70AAAAASUVORK5CYII=)
  }

  /* 报表 */
  .icon-Report {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAalJREFUOBGtkz0vQ2EYhnuojxoaEyVNJH4ATRpiNfiYkJgkFia2GppIDPwCBqOhAyISicHAhLQmsRAJnZGQIjFJKtR1N+dt39Mch8GTXH0+76dv33MaCv2TOX57SqVSJ/VJGIE20NwTHMG+4zgP+J+NBQ2wBgXIwBj0QT+MQwaeIQX1vpvUgDPYhnbfIYrqwS1oYZNnjoKW5OHA0whImN2BQ6iejGQOzgN0vi00x9KWmwRhuIMe3+mAojSuNqzfnIR87Ty1FtDFV54ssa5g0J4l15UkwxR7IVfTbCS/hG6IMTjLI38nXoUInICxLEGijo843Juq69P4a5DoE7L6VvwULIJt0sa1qAAx00HQRbwAKU5RhGniPbiAGfJXvG3SFnRHQ6DjlY14AgZMbjy1hIltT/0UhrUoAi/QYQ/8JZbG1TaX50mWYesvYnsGzS6sVGokUbiB9Urxl4DZNBQh6hmloGPKNkAPwdfUgyV4A+8So6DRCjm4gnnQcgn1IirWX0k9zQTfKQMSjcImPIKO/+HGqqlX/aO6p6i8/uZUtkegvuGLd6hk9+34GwzUehF7xvUvAAAAAElFTkSuQmCC)
  }

  /* 数据 */
  .icon-data {
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAAAXNSR0IArs4c6QAAAW9JREFUOBGtlL1KA0EURrNmIcYipBGiprGwULGz10ZB7KwCdhbaimUK0QewsBSsxMZOFCxtfAHLFAEbi2DQQhAExfV8y8wya4ZZErxwmDv359uZ4Sal0j9Z5NNJkmSG+BasQwMqsB9F0T2r13JCCJSpOoFtuIVr6MEaLCHUYvVabKOI6KtqEos0vTi5OfwFu/etYwqak9zg3iEw74r4mnyxVIjELsQI6EojWcxpdL02bAYUPsjVA/n0WsuIdUJF5CdB1oYKjDvobVOhHYLnISFTN0ud7PMPb+xXda0mPBcJ8X5P1OTGRT2IHLKs6LH7oKEb1aZo7EuoC8EZKfiCers6WhVeQcpDmXpM70TayOYIroZSoZieCzjO+tjU4BsOsmCBQ+0pdKCWKyVQh3fQrNiJz9VooxycgWx6oMAU6c4P8Ah70ICyQb5iyqmmcNL1s9mAS+jBl0G+Yspl/xr2RAMDZhPmhMrba/4wlImbd/1f/agS1OLBXWMAAAAASUVORK5CYII=)
  }

</style>
