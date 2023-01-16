/* eslint-disable no-unused-vars */
import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const GrafanaIcon = ({ isActive }) => {
  return (
    <SvgIcon
      style={{ width : "3rem", height : "auto", filter : isActive
        ? null
        : "grayscale(1)" }}
      viewBox="0 0 50 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M48.7179 22.963C48.6325 22.094 48.49 21.0969 48.2051 19.9858C47.9202 18.8889 47.4929 17.6781 46.8661 16.4245C46.2393 15.1709 45.4273 13.8746 44.3732 12.6068C43.9601 12.1083 43.5043 11.6239 43.0199 11.1539C43.7464 8.26211 42.1367 5.75499 42.1367 5.75499C39.359 5.58405 37.5926 6.62394 36.9373 7.09402C36.8233 7.05129 36.7236 6.99431 36.6097 6.95157C36.1396 6.76639 35.6553 6.5812 35.1424 6.42451C34.6439 6.26781 34.131 6.12536 33.604 5.99716C33.0769 5.86895 32.5498 5.76924 32.0085 5.68377C31.9088 5.66952 31.8233 5.65528 31.7236 5.64103C30.5128 1.76639 27.037 0.142456 27.037 0.142456C23.1481 2.60684 22.4216 6.05414 22.4216 6.05414C22.4216 6.05414 22.4074 6.12536 22.3789 6.25357C22.1652 6.31055 21.9516 6.38177 21.7379 6.43875C21.4387 6.52422 21.1396 6.63818 20.8547 6.75214C20.5555 6.8661 20.2706 6.98006 19.9715 7.10827C19.3875 7.36468 18.8034 7.64958 18.2336 7.96297C17.6781 8.27636 17.1367 8.61824 16.6097 8.97436C16.5385 8.94587 16.4672 8.91738 16.4672 8.91738C11.0826 6.8661 6.31053 9.33049 6.31053 9.33049C5.86893 15.057 8.46153 18.661 8.97435 19.3162C8.84614 19.6724 8.73218 20.0285 8.61822 20.3846C8.21936 21.6809 7.92022 23.0057 7.73503 24.3875C7.70654 24.5869 7.67805 24.7863 7.66381 24.9858C2.67805 27.4501 1.21082 32.4786 1.21082 32.4786C5.35611 37.2507 10.1994 37.5499 10.1994 37.5499L10.2137 37.5356C10.8262 38.6325 11.5385 39.6724 12.3362 40.6553C12.6781 41.0684 13.0199 41.453 13.3903 41.8376C11.8803 46.1681 13.604 49.7578 13.604 49.7578C18.2194 49.9288 21.2535 47.735 21.8946 47.2365C22.3504 47.3932 22.8205 47.5356 23.2906 47.6496C24.7151 48.0199 26.1681 48.2336 27.6211 48.2906C27.9772 48.3048 28.3476 48.3191 28.7037 48.3048H28.8746H28.9886H29.2165L29.4444 48.2906V48.3048C31.6239 51.4103 35.4416 51.8519 35.4416 51.8519C38.1624 48.9886 38.3191 46.1396 38.3191 45.5271C38.3191 45.5271 38.3191 45.5128 38.3191 45.4843C38.3191 45.4274 38.3191 45.3989 38.3191 45.3989C38.3191 45.3561 38.3191 45.3134 38.3191 45.2707C38.8889 44.8718 39.4302 44.4445 39.943 43.9744C41.0256 42.9915 41.98 41.8661 42.7778 40.6553C42.849 40.5413 42.9202 40.4274 42.9914 40.3134C46.0684 40.4843 48.2479 38.4046 48.2479 38.4046C47.735 35.1994 45.9117 33.6325 45.5271 33.3333C45.5271 33.3333 45.5128 33.3191 45.4843 33.3048C45.4558 33.2906 45.4558 33.2764 45.4558 33.2764C45.4416 33.2621 45.4131 33.2479 45.3846 33.2336C45.3988 33.0342 45.4131 32.849 45.4273 32.6496C45.4558 32.3077 45.4558 31.9516 45.4558 31.6097V31.3533V31.2251V31.1539C45.4558 31.0684 45.4558 31.0969 45.4558 31.0684L45.4416 30.8547L45.4273 30.5698C45.4273 30.4701 45.4131 30.3846 45.3989 30.2992C45.3846 30.2137 45.3846 30.114 45.3704 30.0285L45.3419 29.7578L45.2991 29.4872C45.2422 29.1311 45.1852 28.7892 45.0997 28.4331C44.7721 27.0513 44.2308 25.7407 43.5328 24.5584C42.8205 23.3761 41.9373 22.3362 40.9259 21.453C39.9288 20.5698 38.8034 19.8576 37.6353 19.3305C36.453 18.8034 35.2279 18.4615 34.0028 18.3048C33.3903 18.2194 32.7778 18.1909 32.1652 18.2051H31.9373H31.8803C31.8661 18.2051 31.7949 18.2051 31.8091 18.2051H31.7094L31.4815 18.2194C31.396 18.2194 31.3105 18.2336 31.2393 18.2336C30.9259 18.2621 30.6125 18.3048 30.3134 18.3618C29.0883 18.5897 27.9345 19.0313 26.9231 19.6439C25.9117 20.2564 25.0285 21.0114 24.3162 21.8661C23.604 22.7208 23.0484 23.6752 22.6638 24.6581C22.2792 25.641 22.0655 26.6667 22.0085 27.6496C21.9943 27.8917 21.9943 28.1482 21.9943 28.3903C21.9943 28.4473 21.9943 28.5185 21.9943 28.5755L22.0085 28.7749C22.0228 28.8889 22.0228 29.0171 22.037 29.1311C22.0798 29.6296 22.1795 30.114 22.3077 30.5698C22.5783 31.4957 23.0057 32.3362 23.5328 33.0484C24.0598 33.7607 24.7008 34.3447 25.3704 34.8148C26.0399 35.2707 26.7664 35.5983 27.4786 35.812C28.1909 36.0256 28.9031 36.1111 29.5726 36.1111C29.6581 36.1111 29.7436 36.1111 29.8148 36.1111C29.8575 36.1111 29.9003 36.1111 29.943 36.1111C29.9857 36.1111 30.0285 36.1111 30.0712 36.0969C30.1424 36.0969 30.2137 36.0826 30.2849 36.0826C30.2991 36.0826 30.3276 36.0826 30.3419 36.0684L30.4131 36.0541C30.4558 36.0541 30.4986 36.0399 30.5413 36.0399C30.6268 36.0256 30.698 36.0114 30.7835 35.9972C30.8689 35.9829 30.9402 35.9687 31.0114 35.9402C31.1681 35.9117 31.3105 35.8547 31.453 35.812C31.7379 35.7123 32.0228 35.5983 32.2649 35.4701C32.5214 35.3419 32.7493 35.1852 32.9772 35.0427C33.0342 35 33.1054 34.9573 33.1624 34.9003C33.3903 34.7151 33.433 34.3732 33.2479 34.1453C33.0912 33.9459 32.8063 33.8889 32.5783 34.0171C32.5214 34.0456 32.4644 34.0741 32.4074 34.1026C32.208 34.2023 32.0085 34.2878 31.7949 34.359C31.5812 34.4302 31.3533 34.4872 31.1253 34.5299C31.0114 34.5442 30.8974 34.5584 30.7692 34.5727C30.7122 34.5727 30.6553 34.5869 30.584 34.5869C30.5271 34.5869 30.4558 34.5869 30.4131 34.5869C30.3561 34.5869 30.2991 34.5869 30.2422 34.5869C30.1709 34.5869 30.0997 34.5869 30.0285 34.5727C30.0285 34.5727 29.9857 34.5727 30.0142 34.5727H29.9857H29.943C29.9145 34.5727 29.8718 34.5727 29.8433 34.5584C29.7721 34.5442 29.7151 34.5442 29.6439 34.5299C29.1168 34.4587 28.5897 34.302 28.0912 34.0741C27.5783 33.8462 27.094 33.5328 26.6524 33.1339C26.2108 32.735 25.8262 32.265 25.5271 31.7237C25.2279 31.1823 25.0142 30.5841 24.9145 29.9573C24.8718 29.6439 24.8433 29.3162 24.8575 29.0029C24.8575 28.9174 24.8718 28.8319 24.8718 28.7464C24.8718 28.7749 24.8718 28.7322 24.8718 28.7322V28.7037V28.6325C24.8718 28.5897 24.886 28.547 24.886 28.5043C24.9003 28.3333 24.9288 28.1624 24.9573 27.9915C25.1994 26.6239 25.8832 25.2849 26.9373 24.2735C27.208 24.0171 27.4929 23.7892 27.792 23.5755C28.0912 23.3618 28.4188 23.1766 28.7607 23.0199C29.1026 22.8633 29.4444 22.735 29.8148 22.6353C30.1709 22.5356 30.5413 22.4786 30.9259 22.4359C31.1111 22.4217 31.2963 22.4074 31.4957 22.4074C31.5527 22.4074 31.5812 22.4074 31.6239 22.4074H31.7806H31.8803C31.9231 22.4074 31.8803 22.4074 31.8946 22.4074H31.9373L32.094 22.4217C32.5071 22.4501 32.906 22.5071 33.3048 22.6068C34.1026 22.7778 34.886 23.0769 35.6125 23.4758C37.0655 24.2878 38.3048 25.5413 39.0598 27.0513C39.4444 27.8063 39.7151 28.6182 39.8433 29.4587C39.8718 29.6724 39.9003 29.886 39.9145 30.0997L39.9288 30.2564L39.943 30.4131C39.943 30.4701 39.943 30.5271 39.943 30.5698C39.943 30.6268 39.943 30.6838 39.943 30.7265V30.869V31.0256C39.943 31.1254 39.9288 31.2963 39.9288 31.396C39.9145 31.6239 39.886 31.8661 39.8575 32.094C39.829 32.3219 39.7863 32.5499 39.7436 32.7778C39.7008 33.0057 39.6439 33.2336 39.5869 33.4473C39.4729 33.8889 39.3305 34.3305 39.1595 34.7721C38.8177 35.6268 38.3618 36.453 37.8205 37.208C36.7236 38.718 35.2279 39.943 33.5185 40.7265C32.6638 41.1111 31.7664 41.396 30.8404 41.5385C30.3846 41.6239 29.9145 41.6667 29.4444 41.6809H29.359H29.2877H29.131H28.9031H28.7892C28.8461 41.6809 28.7749 41.6809 28.7749 41.6809H28.7322C28.4758 41.6809 28.2336 41.6667 27.9772 41.6382C26.98 41.567 25.9971 41.3818 25.0285 41.1111C24.0741 40.8405 23.1481 40.4558 22.2649 40C20.5128 39.0598 18.9316 37.7778 17.7065 36.2251C17.094 35.4558 16.5527 34.6154 16.1111 33.7464C15.6695 32.8775 15.3134 31.9516 15.057 31.0256C14.8006 30.0855 14.6439 29.1311 14.5726 28.1624L14.5584 27.9772V27.9345V27.8917V27.8063V27.6496V27.6068V27.5499V27.4359V27.208V27.1652C14.5584 27.1652 14.5584 27.1795 14.5584 27.151V27.0655C14.5584 26.9516 14.5584 26.8234 14.5584 26.7094C14.5726 26.2393 14.6154 25.7407 14.6724 25.2564C14.7293 24.7721 14.8148 24.2735 14.9145 23.7892C15.0142 23.3048 15.1282 22.8205 15.2706 22.3362C15.5413 21.3818 15.8832 20.4558 16.282 19.5869C17.094 17.849 18.1481 16.2963 19.4159 15.057C19.7293 14.7436 20.057 14.4587 20.3988 14.1738C20.7407 13.9031 21.0969 13.6467 21.4672 13.4046C21.8234 13.1624 22.208 12.9487 22.5926 12.7493C22.7778 12.6496 22.9772 12.5499 23.1766 12.4644C23.2763 12.4217 23.3761 12.3789 23.4758 12.3362C23.5755 12.2935 23.6752 12.2507 23.7749 12.208C24.1738 12.037 24.5869 11.8946 25.0142 11.7664C25.1139 11.7379 25.2279 11.7094 25.3276 11.6667C25.4273 11.6382 25.5413 11.6097 25.641 11.5812C25.8547 11.5242 26.0684 11.4672 26.282 11.4245C26.3818 11.396 26.4957 11.3818 26.6097 11.3533C26.7236 11.3248 26.8234 11.3105 26.9373 11.2821C27.0513 11.2678 27.151 11.2393 27.2649 11.2251L27.4216 11.1966L27.5926 11.1681C27.7065 11.1539 27.8063 11.1396 27.9202 11.1254C28.0484 11.1111 28.1624 11.0969 28.2906 11.0826C28.3903 11.0684 28.5612 11.0541 28.661 11.0399C28.7322 11.0256 28.8177 11.0256 28.8889 11.0114L29.0456 10.9972L29.1168 10.9829H29.2023C29.3305 10.9687 29.4444 10.9687 29.5726 10.9544L29.7578 10.9402C29.7578 10.9402 29.829 10.9402 29.7721 10.9402H29.8148H29.9003C30 10.9402 30.1139 10.9259 30.2137 10.9259C30.6268 10.9117 31.0541 10.9117 31.4672 10.9259C32.2934 10.9544 33.1054 11.0541 33.8889 11.1966C35.4701 11.4957 36.9516 11.9943 38.3048 12.6638C39.6581 13.3191 40.8547 14.1311 41.9088 15.0143C41.98 15.0712 42.037 15.1282 42.1083 15.1852C42.1652 15.2422 42.2365 15.2992 42.2934 15.3561C42.4216 15.4701 42.5356 15.5841 42.6638 15.698C42.792 15.812 42.906 15.9259 43.0199 16.0399C43.1339 16.1539 43.2479 16.2678 43.3618 16.396C43.8034 16.8661 44.2165 17.3362 44.5869 17.8205C45.3276 18.7749 45.9259 19.7436 46.396 20.6553C46.4245 20.7123 46.453 20.7692 46.4815 20.8262C46.51 20.8832 46.5384 20.9402 46.5669 20.9972C46.6239 21.1111 46.6809 21.2251 46.7236 21.339C46.7806 21.453 46.8234 21.5527 46.8803 21.6667C46.9231 21.7806 46.98 21.8803 47.0228 21.9943C47.1937 22.4217 47.3647 22.8348 47.4929 23.2194C47.7065 23.8462 47.8632 24.4017 47.9914 24.886C48.0342 25.0855 48.2194 25.2137 48.4188 25.1852C48.6325 25.1709 48.7892 25 48.7892 24.7863C48.8034 24.2735 48.7892 23.661 48.7179 22.963Z"
          fill="url(#paint0_linear)"
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="25" y1="63.4608" x2="25" y2="16.2443" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFF100" />
          <stop offset="1" stopColor="#F05A28" />
        </linearGradient>
        <clipPath id="clip0">
          <rect width="50" height="51.9943" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};

export default GrafanaIcon;
