import { useContext } from "react";
import WidgetWrapperContext from "@cloud/Custom/Wrapper/WidgetWrapper";
import { isEmpty } from "lodash";
import {
  positionToPath,
  otherAttrToObj,
  jsonParse,
  renderPositionType,
} from "util/helper";
import {
  AtomList,
  AtomTitle,
  AtomText,
  AtomCurrency,
  AtomIcon,
  AtomButton,
  AtomTag,
  AtomFade,
  AtomImage,
} from "@components/common/Atom";

const Partners6 = () => {
    const {
        config,
        datasrc,
        otherattr,
        positionConfig,
        metaConfig,
        gridJsonConfig,
        pathConfig,
        Title,
      } = useContext(WidgetWrapperContext);
      if (isEmpty(datasrc)) return null;
      // console.log("Partners6 config", config);
      // console.log("Partners6 datasrc", datasrc);
      // console.log("Partners6 otherattr", otherattr);
      // console.log("Partners6 positionConfig", positionConfig);
    return (
        <div className="bg-gray-800">
            <div className="grid xl:grid-cols-7 grid-cols-1 md:grid-cols-4 justify-items-center md:justify-items-start xl:justify-items-center md:py-12 gap-y-8 xl:gap-y-0 gap-x-20 py-9 2xl:container 2xl:mx-auto xl:px-20 md:px-6 px-28">
                <div>
                    <svg width="86" height="24" viewBox="0 0 86 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.195 0.558594V0.793069H17.1939L12.1095 17.4245L6.08765 0.793069H8.07V0.558594H0V0.793069H2.12308L10.4589 23.7819L17.6252 0.793069H19.5498V0.558594H15.195Z" fill="white" />
                        <path
                            d="M51.0877 0.157062V8.14672H50.905C50.5649 6.5736 50.084 5.0428 49.2465 3.65396C48.2508 2.03116 46.6668 0.207401 44.6013 0.207401C39.8571 0.207401 39.426 8.78259 39.426 12.0535C39.426 14.9823 39.6582 18.0022 40.7114 20.7462C41.4497 22.6696 42.5197 23.6158 44.502 23.6158C46.078 23.6158 47.753 22.8126 48.591 21.4321C48.8064 21.0719 48.8234 20.6708 48.8234 20.2601V14.0864H46.7492V13.8442H54.3386V14.0864H52.5638V23.3224H52.4061C51.9583 22.5696 51.2535 22.0757 50.3494 22.0757C49.6943 22.0757 49.0552 22.3102 48.4833 22.6285L47.9686 22.9126C46.8078 23.4318 45.6967 23.8077 44.4107 23.8077C38.5216 23.8077 35.3867 17.4746 35.3867 12.2214C35.3867 8.38106 36.8379 4.27274 39.9235 1.87186C41.3073 0.795036 42.9831 0 44.7656 0C45.4628 0 46.1509 0.217521 46.7976 0.476837L47.2709 0.660843C47.8095 0.861409 48.3988 1.05448 48.9791 1.05448C49.7011 1.05448 50.348 0.57712 50.9036 0.159033H51.0873L51.0877 0.157062Z"
                            fill="white"
                        />
                        <path
                            d="M52.8874 0.558931H60.983V0.793275H58.8352V18.5208C58.8352 21.2978 61.6711 22.9882 64.1515 22.9882C66.8216 22.9882 69.0696 21.1136 69.0696 18.362V0.793537H66.5317V0.559063H85.5693V8.78289H85.4116C85.1711 6.60743 84.7568 4.37348 83.272 2.67551C81.7705 0.960062 79.7298 0.793406 77.6319 0.793406H75.3671V11.3679C75.8319 11.4181 76.3047 11.4517 76.7771 11.4517C79.622 11.4517 80.3603 9.47711 80.485 7.03419H80.6923V16.3121H80.485C80.1281 14.0954 79.1575 11.7187 76.5778 11.7187C76.1715 11.7187 75.7733 11.7443 75.3671 11.7778V23.0883H78.7593C80.5177 23.0883 82.2683 22.3189 83.5125 21.081C84.5737 20.026 85.3117 18.6549 85.5689 17.1743C85.7099 16.346 85.7765 15.5012 85.818 14.6642H85.9992V23.3228H69.668V23.0883H71.567V0.792223H69.4079V18.4278C69.4079 22.0753 65.9746 23.6903 62.7563 23.6903C59.1151 23.6903 55.1006 21.9085 55.1006 17.7087V0.792092H52.8867V0.557617L52.8874 0.558931Z"
                            fill="white"
                        />
                        <path
                            d="M30.7158 12.0288C30.7158 8.70759 29.5377 0.408938 25.0839 0.408938C20.6135 0.408938 19.452 8.69892 19.452 12.0288C19.452 15.3587 20.6218 23.6573 25.0839 23.6573C29.5377 23.6573 30.7157 15.3494 30.7157 12.0284L30.7158 12.0288ZM25.0682 24.0003C22.3893 24.0003 19.8263 22.4854 18.1675 20.4195C16.2763 18.0683 15.3555 15.032 15.3555 12.0282C15.3555 9.14197 16.2015 6.23889 17.9516 3.9383C19.6768 1.67963 22.2725 0.0644531 25.1601 0.0644531C27.8139 0.0644531 30.3608 1.59577 31.9944 3.63692C33.8775 5.98772 34.8145 9.03262 34.8145 12.0365C34.8145 14.9142 33.9602 17.8172 32.2183 20.1179C30.5087 22.3601 27.9286 24.0004 25.0684 24.0004"
                            fill="white"
                        />
                    </svg>
                </div>
                <div>
                    <svg width="132" height="24" viewBox="0 0 132 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <rect x="-59" y="-46" width="296" height="124" fill="#1F2937" />
                            <path
                                d="M88.237 0.151367H83.9724V8.31053C83.3632 2.21688 81.1293 0.151367 77.8801 0.151367C75.4432 0.151367 73.6155 1.39064 72.4986 4.59237C71.6862 1.39064 69.3509 0.151367 65.4924 0.151367H61.2278V8.31053H61.1262C60.517 2.21688 58.2832 0.151367 55.034 0.151367C51.8863 0.151367 49.6524 2.21688 48.9416 8.31053H48.8401V0.151367H43.357L41.3263 12.3385H41.2247L39.4986 0.151367H33.8124V4.79897C33.3047 2.01028 31.6801 0.151367 28.6339 0.151367C25.2832 0.151367 23.4555 2.5267 23.1509 5.522C22.237 1.49402 20.2063 0.151367 17.5663 0.151367C14.6216 0.151367 12.4893 1.90706 11.677 6.96787C11.474 3.35293 10.4586 0.151367 6.19402 0.151367C2.8432 0.151367 0.101562 3.24972 0.101562 12.0287C0.101562 19.5682 1.62468 23.906 6.19402 23.906C10.2555 23.906 11.3724 20.601 11.677 17.2959C12.4893 22.2535 14.6216 23.906 17.5663 23.906C20.4093 23.906 22.4401 22.2535 23.3539 17.6059C23.557 20.601 24.6739 23.906 28.837 23.906C31.1724 23.906 32.8986 22.8732 33.8124 21.1173V23.8028H36.9601V6.45145H37.0616L39.9047 23.8028H42.2401L45.0832 6.45145H45.1847V23.8028H48.9416V15.6434H49.0432C49.6524 21.7371 51.8862 23.8028 55.1355 23.8028C58.2832 23.8028 60.517 21.7371 61.2278 15.6434H61.3293V23.8028H65.5939V14.3008H67.3201C69.4524 14.3008 70.8739 13.4746 71.7878 12.1319C71.7878 21.0141 74.2247 23.8028 77.9816 23.8028C81.1293 23.8028 83.3632 21.7371 84.0739 15.6434V23.8028H93.7201V20.1878H88.3386V0.151367H88.237ZM8.22468 14.8172C8.1232 18.1222 7.81861 20.1878 6.39697 20.1878C5.07697 20.1878 4.67091 19.3616 4.67091 11.8221C4.67091 4.17934 5.58468 3.66292 6.49861 3.66292C7.51402 3.66292 8.02156 5.10879 8.02156 8.82695L11.5755 8.72356C11.474 9.7564 11.474 10.7892 11.474 12.0287C11.474 13.1647 11.474 14.1976 11.5755 15.127L8.22468 14.8172ZM19.1909 14.4042C19.1909 19.3616 18.5816 20.2911 17.6678 20.2911C16.6524 20.2911 16.1447 19.2584 16.1447 14.4042V9.54997C16.1447 4.59237 16.7539 3.66292 17.6678 3.66292C18.6832 3.66292 19.1909 4.69559 19.1909 9.54997V14.4042ZM29.0401 20.2912C27.2124 20.2912 27.2124 18.0189 27.2124 16.7795H23.557C23.7601 15.4368 23.8616 13.7844 23.8616 11.9253C23.8616 10.9958 23.8616 10.0662 23.7601 9.23998C25.5878 13.4746 30.8678 14.714 30.8678 18.1222C30.8678 18.9486 30.4616 20.2912 29.0401 20.2912ZM27.0093 5.72843C27.0093 4.48916 27.6186 3.66292 28.6339 3.66292C30.3601 3.66292 30.3601 5.83181 30.3601 7.07109H33.914V13.991C31.8832 10.2728 27.0093 8.82695 27.0093 5.72843ZM56.6586 14.4042C56.6586 19.3616 56.0493 20.3944 55.1355 20.3944C54.1201 20.3944 53.6124 19.3616 53.6124 14.4042V9.54997C53.6124 4.59237 54.2216 3.55953 55.1355 3.55953C56.1509 3.55953 56.6586 4.59237 56.6586 9.54997V14.4042ZM65.8986 10.8926H65.4924V3.76614H65.797C67.2186 3.76614 68.5386 3.86935 68.5386 7.27769C68.5386 10.1696 67.6247 10.8926 65.8986 10.8926ZM79.4032 14.4042C79.4032 19.3616 78.794 20.3944 77.8801 20.3944C76.8647 20.3944 76.357 19.3616 76.357 14.4042V9.54997C76.357 4.59237 76.9662 3.55953 77.8801 3.55953C78.8955 3.55953 79.4032 4.59237 79.4032 9.54997V14.4042ZM94.3293 0.151367H98.5939V23.8028H94.3293V0.151367ZM110.779 0.151367H99.2032V3.76614H102.859V23.8028H107.123V3.76614H110.779V0.151367ZM128.345 0.151367V12.6483H128.243L124.385 0.151367H120.222V20.8075L117.683 0.151367H111.489L108.24 23.8028H111.794L112.403 18.5354H115.855L116.465 23.8028H123.877V9.44658H123.979L128.548 23.8028H131.899V0.151367H128.345ZM112.911 15.127L114.231 3.76614H114.332L115.551 15.127H112.911Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="132" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <svg width="99" height="24" viewBox="0 0 99 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17.7481 22.3996C17.5591 23.1521 17.5332 23.2279 17.3415 23.2279H15.1875V23.3752H20.0662V23.2279H17.8331C17.6886 23.2279 17.7128 23.1258 17.8884 22.438L19.3891 16.6412H25.3295L27.1432 23.2279H24.7299V23.3752H32.8479V23.2279H30.3241L23.592 0H23.5511L17.7481 22.3996ZM22.2611 5.53896L25.2834 16.4946H19.4316L22.2611 5.53896ZM87.6685 11.786H89.5256C91.1708 11.786 93.5972 12.4908 93.5972 15.3549V20.5413C93.5972 22.6635 94.7744 24 96.8512 24C99.0336 24 99 21.8073 99 20.2256V18.5586H98.8524V20.2256C98.8524 22.0248 98.6379 23.5872 97.5732 23.5872C96.6297 23.5872 96.4267 23.0051 96.4267 20.564V15.3549C96.4267 12.9446 94.463 12.0612 91.4303 11.7115C95.2075 11.2645 96.6297 8.86481 96.6297 6.21124C96.6297 2.28619 94.8079 0.636301 90.1161 0.636301L82.6786 0.634727V0.782223H84.6315C84.7725 0.782223 84.8392 0.82157 84.8392 0.901164V23.1081C84.8392 23.1881 84.7725 23.2279 84.6315 23.2279H82.6786V23.3752H89.5181V23.2279H87.8753C87.734 23.2279 87.6685 23.1881 87.6685 23.1081V11.786ZM87.6685 0.783572H89.6731C92.761 0.783572 93.6343 3.12012 93.6343 6.21124C93.6343 9.10539 92.761 11.6387 89.6731 11.6387H87.6685V0.783572ZM37.8959 23.1119C37.8717 23.1647 37.899 23.2279 38.0131 23.2279L43.342 23.2292C44.9826 23.2292 47.1002 20.8153 47.1002 13.037V12.2271H47.2485V23.3761H34.525L44.1642 0.897116C44.1877 0.844953 44.1601 0.782223 44.0462 0.782223L38.3885 0.783572C36.9035 0.783572 34.747 3.48077 34.747 10.9763V11.786H34.5989V0.636301H47.5445L37.8959 23.1119ZM6.39492 0.783572C9.48345 0.783572 10.7409 3.12012 10.7409 6.21124C10.7409 9.10539 9.48345 11.4177 6.39492 11.4177H4.98965V0.783572H6.39492ZM0 0.634727V0.782223H1.9531C2.09435 0.782223 2.16034 0.82157 2.16034 0.901164V23.1081C2.16034 23.1881 2.09435 23.2279 1.9531 23.2279H0V23.3752L7.28288 23.3761C11.9738 23.3761 14.4765 21.4321 14.4765 17.5082C14.4765 14.7907 12.9973 12.025 8.32814 11.4741C12.2945 11.1051 13.6629 8.62671 13.6629 6.21124C13.6629 2.67876 11.5301 0.636301 6.83902 0.636301L0 0.634727ZM6.39492 11.5649C9.8776 11.5649 11.2589 13.9262 11.2589 17.5082C11.2589 20.5984 10.0259 23.2292 7.13463 23.2292L5.19689 23.2279C5.05564 23.2279 4.98965 23.1881 4.98965 23.1081V11.5631L6.39492 11.5649ZM51.333 22.3996C51.1431 23.1521 51.1171 23.2279 50.9259 23.2279H48.7719V23.3752H53.6511V23.2279H51.4173C51.2738 23.2279 51.2973 23.1258 51.4738 22.438L52.9737 16.6412H58.9142L60.7283 23.2279H58.3141V23.3752H66.4328V23.2279H63.9081L57.1765 0H57.1351L51.333 22.3996ZM55.846 5.53896L58.8674 16.4946H53.0155L55.846 5.53896Z"
                            fill="white"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M67.5377 22.3996C67.3481 23.1521 67.323 23.2279 67.1316 23.2279H64.9771V23.3752H69.856V23.2279H67.6225C67.479 23.2279 67.5027 23.1258 67.6785 22.438L69.1792 16.6412H75.1194L76.9333 23.2279H74.5193V23.3752H82.6378V23.2279H80.114L73.3823 0H73.341L67.5377 22.3996ZM72.0514 5.53896L75.0733 16.4946H69.2207L72.0514 5.53896ZM62.3173 2.98836C62.3173 2.99736 62.3257 3.00073 62.3415 3.00073H62.6712V3.05312H61.5455V3.00073H61.8396C61.856 3.00073 61.8633 2.99736 61.8633 2.98836V1.85449H60.7882V2.98836C60.7882 2.99736 60.7957 3.00073 60.8117 3.00073H61.1057V3.05312H59.9805V3.00073H60.3102C60.3262 3.00073 60.3337 2.99736 60.3337 2.98836V0.763336C60.3337 0.755242 60.3262 0.751419 60.3102 0.751419H59.9805V0.698806H61.1057V0.751419H60.8117C60.7957 0.751419 60.7882 0.755242 60.7882 0.763336V1.80255H61.8633V0.763336C61.8633 0.755242 61.856 0.751419 61.8396 0.751419H61.5455V0.698806H62.6712V0.751419H62.3415C62.3257 0.751419 62.3173 0.755242 62.3173 0.763336V2.98836ZM65.4429 2.022C65.3394 2.022 65.27 1.97433 65.27 1.89406C65.27 1.82144 65.3139 1.82391 65.3139 1.77062C65.3139 1.71666 65.2791 1.69193 65.2232 1.69193C65.1656 1.69193 65.0628 1.71104 64.9848 1.94668V2.98836C64.9848 2.99736 64.992 3.00073 65.0083 3.00073H65.2104V3.05312H64.418V3.00073H64.6194C64.6356 3.00073 64.6429 2.99736 64.6429 2.98836V1.7025C64.6429 1.69463 64.6356 1.69013 64.6194 1.69013H64.418V1.63774H64.9749L64.9848 1.64786V1.86753C65.0443 1.68451 65.1726 1.60896 65.3236 1.60896C65.5073 1.60896 65.6267 1.70497 65.6267 1.85359C65.6267 1.94735 65.5539 2.022 65.4429 2.022ZM68.4148 3.08167C68.6727 3.08167 68.8802 2.95734 69.0187 2.7669L68.9787 2.73497C68.8492 2.91731 68.6756 3.03018 68.4148 3.03018C68.3195 3.03018 68.2426 3.0122 68.1769 2.95419C68.0684 2.85728 68.0345 2.74374 68.0345 2.34577C68.0345 2.31631 68.0347 2.30822 68.0354 2.28124H69.049L69.0589 2.27202C69.0589 2.00333 68.8727 1.60896 68.4148 1.60896C67.9922 1.60896 67.6747 1.93926 67.6747 2.34577C67.6747 2.75161 67.9922 3.08167 68.4148 3.08167ZM68.6029 1.73757C68.6806 1.82481 68.7059 1.95972 68.712 2.22885H68.0363C68.0446 1.95972 68.0788 1.82481 68.1769 1.73757C68.2426 1.67934 68.3195 1.66135 68.4148 1.66135C68.4973 1.66135 68.5507 1.67934 68.6029 1.73757ZM63.3718 3.01692C63.5531 3.01692 63.6706 2.88854 63.6706 2.76577V2.27584C63.5863 2.32418 63.4641 2.32418 63.356 2.34352C63.2347 2.36555 63.1045 2.42873 63.1045 2.73362C63.1045 2.96633 63.2577 3.01692 63.3718 3.01692ZM62.9463 1.89676C62.9463 1.77917 63.0952 1.60896 63.3829 1.60896C63.8044 1.60896 64.013 1.79378 64.013 2.20884V2.88404C64.013 2.96341 64.0512 2.99623 64.1068 2.99623C64.1719 2.99623 64.2241 2.94272 64.2381 2.91034L64.2727 2.94452C64.2514 3.00343 64.1434 3.08167 64.006 3.08167C63.8501 3.08167 63.7129 2.99196 63.6887 2.8674C63.639 3.00927 63.5025 3.08167 63.3061 3.08167C62.9804 3.08167 62.7711 2.9688 62.7711 2.73362C62.7711 2.38646 63.1438 2.30575 63.2871 2.29428C63.4891 2.27742 63.6706 2.26415 63.6706 2.1931V1.99951C63.6706 1.76253 63.5667 1.66135 63.3829 1.66135C63.2909 1.66135 63.2338 1.70317 63.2338 1.8012C63.2338 1.85696 63.2629 1.87405 63.2629 1.92846C63.2629 1.98939 63.2143 2.0474 63.0991 2.0474C62.9894 2.0474 62.9463 1.97186 62.9463 1.89676ZM66.9124 1.736C66.8511 1.67934 66.7682 1.66135 66.6796 1.66135C66.5571 1.66135 66.4446 1.74184 66.3666 1.83268V2.82221C66.4136 2.94002 66.5499 3.03018 66.6796 3.03018C66.7682 3.03018 66.8511 3.01265 66.9124 2.95531C67.0134 2.8602 67.0814 2.6945 67.0814 2.35431C67.0814 2.0139 67.0134 1.83088 66.9124 1.736ZM67.4292 2.35431C67.4292 2.72193 67.1153 3.08167 66.6796 3.08167C66.5463 3.08167 66.4446 2.99893 66.3666 2.91889V4.01544C66.3666 4.02308 66.3747 4.02691 66.3905 4.02691H66.5919V4.07929H65.8002V4.02691H66.0014C66.0174 4.02691 66.0249 4.02308 66.0249 4.01544V1.7025C66.0249 1.69463 66.0174 1.69013 66.0014 1.69013H65.8002V1.63774H66.3569L66.3666 1.64786V1.774C66.4446 1.69328 66.5463 1.60896 66.6796 1.60896C67.1153 1.60896 67.4292 1.98625 67.4292 2.35431ZM71.7513 1.64854C71.7888 1.64854 71.8096 1.63325 71.8137 1.61886H71.8708V1.96961H71.8137C71.8137 1.76568 71.6299 1.66135 71.4559 1.66135C71.2758 1.66135 71.1888 1.74184 71.1888 1.86888C71.1888 2.03234 71.3067 2.11553 71.5746 2.19018C71.855 2.26865 72.0397 2.4049 72.0397 2.6176C72.0397 2.88674 71.8211 3.08167 71.4715 3.08167C71.2638 3.08167 71.1739 2.98544 71.0663 2.98544C71.0423 2.98463 71.0186 2.9911 70.9984 3.00399C70.9781 3.01688 70.9623 3.03558 70.953 3.05762H70.8952L70.9151 2.59107H70.9729C70.9632 2.8357 71.1933 3.03018 71.4715 3.03018C71.6817 3.03018 71.8008 2.9344 71.8008 2.7561C71.8008 2.57825 71.66 2.50743 71.403 2.42941C71.1517 2.35386 70.9768 2.25223 70.9768 2.03234C70.9768 1.77175 71.2306 1.60896 71.4559 1.60896C71.6028 1.60896 71.6166 1.64854 71.7513 1.64854ZM70.7069 1.15681C70.7069 1.06193 70.7878 0.98458 70.8877 0.98458C70.996 0.98458 71.0762 1.06282 71.0762 1.17749C71.0762 1.3468 70.9225 1.54556 70.7117 1.67169L70.678 1.63392C70.8303 1.54623 70.9399 1.43808 71.0048 1.28452C70.9768 1.31532 70.9379 1.32949 70.8877 1.32949C70.7878 1.32949 70.7069 1.25259 70.7069 1.15681ZM70.2497 2.022C70.1467 2.022 70.0768 1.97433 70.0768 1.89406C70.0768 1.82144 70.1209 1.82391 70.1209 1.77062C70.1209 1.71666 70.0857 1.69193 70.0296 1.69193C69.9722 1.69193 69.8691 1.71104 69.7916 1.94668V2.98836C69.7916 2.99736 69.7982 3.00073 69.8145 3.00073H70.0163V3.05312H69.2239V3.00073H69.4262C69.442 3.00073 69.4497 2.99736 69.4497 2.98836V1.7025C69.4497 1.69463 69.442 1.69013 69.4262 1.69013H69.2239V1.63774H69.7812L69.7916 1.64786V1.86753C69.8515 1.68451 69.9792 1.60896 70.1313 1.60896C70.3132 1.60896 70.4342 1.70497 70.4342 1.85359C70.4342 1.94735 70.36 2.022 70.2497 2.022Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div>
                    <svg width="69" height="24" viewBox="0 0 69 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 0.000736229H3.14762V7.11133C3.8924 5.6683 5.47683 5.0425 7.03931 5.06458C9.0818 5.06458 10.3547 5.79346 11.1243 6.99353C11.9172 8.1936 12.1565 9.82069 12.1565 11.6686V19.2144H9.01313V11.8078C9.01313 10.7594 8.85029 9.85971 8.41135 9.21034C7.95826 8.56024 7.23613 8.13544 6.1317 8.13544C4.88568 8.13544 4.14231 8.66037 3.71045 9.3355C3.27859 10.0099 3.15824 10.8337 3.15824 11.5332V19.2048H0V0V0.000736229ZM23.5017 10.9339C23.3813 9.63515 22.0602 7.81075 19.7537 7.83579C17.4231 7.83579 16.1501 9.58509 16.0298 10.9339H23.5017ZM15.9816 13.4327C16.1261 15.6311 17.9993 16.8562 19.8011 16.8304C21.3374 16.8304 22.371 16.106 22.9728 14.9825H26.2153C25.5852 16.5065 24.6507 17.655 23.5463 18.4295C22.4418 19.2291 21.1392 19.6296 19.7728 19.6296C15.7091 19.6296 12.8064 16.2061 12.8064 12.3835C12.8064 8.48515 15.7374 5.06238 19.7232 5.06238C21.6914 5.06238 23.4188 5.83763 24.6436 7.16066C26.2521 8.88566 26.8525 11.0333 26.5905 13.4334H15.971L15.9816 13.4327ZM30.2996 12.4078C30.2996 14.1071 31.4776 16.5801 34.3116 16.5801C36.066 16.5801 37.2192 15.6303 37.8196 14.3817C38.1325 13.7824 38.2762 13.1323 38.3244 12.4579C38.3484 11.8085 38.2281 11.1341 37.9633 10.5341C37.4111 9.23538 36.1863 8.11188 34.289 8.11188C31.7417 8.11188 30.2996 10.2595 30.2996 12.3821V12.4078ZM41.4472 19.2033H38.301V17.2302C37.4585 18.8293 35.7056 19.6289 33.855 19.6289C29.6284 19.6289 27.1527 16.2053 27.1527 12.3327C27.1527 8.01101 30.1558 5.06238 33.8557 5.06238C36.2628 5.06238 37.7283 6.38761 38.3017 7.48607V5.48719H41.4522V19.2033H41.4472ZM49.8083 19.2033H46.7329L41.8309 5.48719H45.0989L48.2706 15.0804L51.4423 5.48719H54.7088L49.8083 19.2033Z"
                            fill="white"
                        />
                        <path d="M58.961 18.6792L53.9883 5.4873H57.3511L60.5709 14.6064L63.7426 5.49172H67.1055L60.1617 24H56.7989L58.961 18.6792ZM69 16.8497C69 18.2191 68.0938 19.132 66.7932 19.132C65.5189 19.132 64.6106 18.1653 64.6106 16.8497C64.6106 15.534 65.5182 14.5673 66.7932 14.5673C68.0931 14.5673 69 15.534 69 16.8497Z" fill="white" />
                    </svg>
                </div>
                <div>
                    <svg width="162" height="24" viewBox="0 0 162 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path
                                d="M149.727 14.1025C149.727 12.3761 155.681 11.7983 155.681 11.7983L155.597 10.0715C154.729 10.0477 151.339 10.1723 151.339 9.26524C151.339 8.08117 156.525 7.79255 158.343 7.72841L157.97 4.96552C154.837 4.97421 140.763 5.01186 140.187 8.82103C139.876 10.8776 143.928 11.3634 143.928 11.3634L143.927 11.4602C143.927 11.4602 138.621 12.4411 138.621 15.0095C138.621 20.2498 156.923 18.7825 161.661 17.4784C161.661 17.4784 161.202 15.151 160.993 15.043C160.804 14.9454 156.962 15.5133 153.913 15.4318C151.434 15.3652 149.727 14.9696 149.727 14.1025ZM111.593 2.57669C111.593 4.06345 109.962 5.1149 107.108 5.1149C104.304 5.1149 102.621 4.08621 102.621 2.57669C102.621 0.892345 105.089 0 107.106 0C109.066 0 111.593 0.87 111.593 2.57669ZM137.511 14.9299C137.284 14.8543 135.633 15.2255 133.786 14.5854C130.83 13.5608 130.377 9.5969 133.886 7.33241L130.602 4.55172C124.808 6.78434 123.616 6.94345 123.074 7.06738C122.805 6.27972 121.548 4.95662 118.881 5.11552C117.43 5.202 115.275 6.01614 114.651 7.49917C114.231 8.49848 114.485 9.62048 115.46 10.3872C116.864 11.4925 119.544 11.2171 119.544 11.2171C118.7 14.753 111.35 17.1716 111.35 13.3819V6.87952H102.621V14.4312C102.621 18.2038 107.25 19.1797 111.796 18.8797C118.157 18.4599 121.734 14.8097 123.039 10.8693L126.142 10.153C126.142 10.153 121.895 15.6879 127.194 18.205C130.217 19.6411 135.777 18.5342 138.011 17.3435C138.011 17.3435 137.64 14.9729 137.511 14.9299ZM117.569 8.10372C117.626 7.16028 119.972 6.91821 120.114 8.00979C120.114 8.00979 117.507 9.12248 117.569 8.10372ZM101.658 15.5712C101.578 15.4872 100.079 15.8609 98.9926 15.5957C97.7937 15.3027 97.7157 14.4054 97.7157 13.212L97.7163 6.82759L88.7262 6.82945V12.8547C88.7262 13.5652 88.786 15.295 86.2639 15.295C85.1299 15.295 83.8356 15.1997 83.8356 13.5652V6.82759H74.8966L74.9043 14.5041C74.9043 18.8806 82.2454 20.219 89.788 17.3617C89.788 17.3617 93.3185 20.1523 102.147 18.1003C102.147 18.1003 101.761 15.6801 101.658 15.5712ZM72.3077 22.4541L72.3042 6.71255L64.1235 6.71379C64.1235 6.71379 64.4005 12.3923 63.9704 13.4959C63.239 15.8948 57.3443 15.5541 57.3456 12.7572C57.3476 9.50566 63.3489 10.0647 63.3489 10.0647L62.7481 6.70676C62.7481 6.70676 48.8734 5.41572 48.2088 12.8319C48.0599 18.0012 57.2686 20.1561 64.0784 17.6117L64.0753 23.7507L72.3077 22.4541Z"
                                fill="white"
                            />
                            <path
                                d="M45.6766 14.9009C46.4995 14.065 46.45 13.0483 45.7517 11.9408C44.721 10.3059 41.8741 9.34861 41.1938 8.05116C40.895 7.48074 40.9064 6.80357 41.3504 5.96978L41.1973 5.28495L31.5907 6.34633C31.0219 7.62723 31.6021 8.62654 31.6439 8.74426C24.7046 16.1752 13.451 16.2424 13.1514 13.6233C12.8705 11.167 20.5645 10.6243 20.5645 10.6243L20.4139 8.17592C20.4139 8.17592 15.2314 8.5835 15.1536 6.98833C15.0733 5.3435 19.9213 4.81178 22.7322 4.77929L22.0147 0.830672C12.9135 0.731362 4.40634 2.7364 3.62469 6.17481C3.39007 7.20598 4.07882 9.02005 7.83296 9.77688V9.90867C7.83296 9.90867 -0.0533144 11.1536 0.000271852 14.5756C0.0478581 17.6197 6.85041 18.972 11.6537 19.0055C21.387 19.0734 26.5182 15.8476 26.5182 15.8476C25.1581 19.5687 35.8151 20.0181 43.2137 17.3476C43.5659 17.2204 46.409 18.431 48.1358 19.1942C48.1358 19.1942 49.24 16.5488 49.0923 16.1886C48.9578 15.8611 45.6766 14.9009 45.6766 14.9009ZM36.1681 15.8903C35.2101 17.0704 31.4591 17.0592 31.7223 16.2865C32.0053 15.4554 35.7266 15.6637 36.1681 15.8903ZM28.9497 14.6265C28.9497 14.6265 31.2048 13.199 33.5223 11.1666C33.5223 11.1666 35.5188 12.3329 36.4323 13.7197C36.4323 13.7197 33.2494 13.115 28.9497 14.6265Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="162" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <svg width="77" height="24" viewBox="0 0 77 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path
                                d="M8.03118 0.18059C8.03209 0.176904 8.15648 0.182432 8.15648 0.182432L8.4894 8.27856L8.37782 8.28593C8.14551 7.36732 7.519 0.246929 5.07699 0.246929C3.20022 0.246929 2.57005 8.97789 2.57005 11.9033C2.57005 15.692 3.03376 23.6407 5.1401 23.6407C6.15532 23.6407 6.70683 21.8882 6.70683 19.5746V12.188H5.58003V11.8977H10.1293V12.188H8.98786V23.7623C8.98512 23.7614 8.85799 23.766 8.85707 23.7632C8.69244 23.2813 8.66866 22.2908 7.92783 22.2908C7.10743 22.2908 6.22757 24.0037 5.08705 24C1.31429 23.988 0 16.9662 0 11.9042C0 7.71099 1.52008 0 5.0834 0C5.68064 0 6.10044 0.155713 6.57695 0.849509C6.92633 1.35903 7.58668 1.4742 7.86929 0.822789C7.95527 0.626536 7.9946 0.373157 8.03118 0.18059Z"
                                fill="white"
                            />
                            <path d="M59.2089 23.3385V0.603561H58.1992V0.327148H62.497V0.603561H61.4827L61.49 23.3385H62.497V23.6195H58.1992V23.3385H59.2089V0.603561V23.3385Z" fill="white" />
                            <path d="M46.7306 23.3367H49.4241C50.6872 23.2869 52.2347 22.0983 52.2347 18.7841C52.2347 18.1521 52.242 17.4905 52.242 16.8299L52.4816 16.8308V23.6149L44.3242 23.6195L49.8613 0.605404H47.2784C45.6449 0.605404 44.7431 3.09588 44.7431 5.38642C44.7431 5.97334 44.7257 7.11124 44.7257 7.11124L44.498 7.114V0.327148H52.4231L46.7306 23.3367Z" fill="white" />
                            <path
                                d="M16.1108 0.329102L20.917 0.330944C23.2182 0.330944 24.7099 2.90711 24.7099 6.00017C24.7099 9.08309 23.4542 11.955 21.5188 11.955C21.26 11.955 21.2838 12.1117 21.5188 12.1117C22.6786 12.1117 23.5493 13.4476 23.7249 13.8033C24.4337 15.2397 23.9453 21.8524 24.655 22.5048C25.2541 23.0567 25.6931 22.1943 25.7718 22.0607L25.8449 22.1141C25.834 22.1749 25.32 23.8804 24.0258 23.8804C22.9502 23.8804 22.4051 22.549 22.2514 21.7152C21.9999 20.357 22.0813 16.2035 21.9441 15.3678C21.8243 14.6399 21.4996 12.4655 20.4844 12.2757C20.0317 12.1909 19.889 12.1909 19.3823 12.1937C19.3796 12.1937 19.3832 23.3349 19.3832 23.3349H20.3966V23.6206H15.9727V23.3349H17.1086L17.1049 0.6092H16.1108V0.329102ZM19.3823 0.6092V11.9025C19.8506 11.8997 20.6253 11.9532 21.4301 10.9074C22.1783 9.93536 22.4746 7.48543 22.4746 5.65926C22.4746 3.71147 21.507 0.603672 20.264 0.603672L19.3823 0.6092Z"
                                fill="white"
                            />
                            <path d="M30.7787 23.3338L35.1258 0L39.1437 23.3338L40.0574 23.3366V23.6185H35.8776V23.332H36.7931L35.6554 16.8243H32.3262L31.1454 23.3375H32.3198V23.6167H29.7891V23.3403L30.7787 23.3338ZM32.3893 16.5276H35.6142L34.0603 7.41708L32.3893 16.5276Z" fill="white" />
                            <path d="M67.7219 23.3338L72.069 0L76.0869 23.3338L76.9997 23.3366V23.6185H72.8208V23.332H73.7355L72.5977 16.8243H69.2685L68.0878 23.3375H69.2612V23.6158H66.7305V23.3394L67.7219 23.3338ZM69.3316 16.5276H72.5565L71.0026 7.41708L69.3316 16.5276Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="77" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div>
                    <svg width="131" height="24" viewBox="0 0 131 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g>
                            <path
                                d="M47.16 9.16293V23.341L52.2865 23.3389L52.2757 6.41098L47.16 9.16293ZM52.4067 2.03542C52.2122 1.48227 51.8012 0.951147 51.285 0.585722C50.1185 -0.120798 48.4428 0.0815579 47.545 1.04008C46.8657 1.67739 46.5405 2.74424 46.7154 3.76441C46.8531 4.71816 47.6308 5.48337 48.2904 5.7901C49.3777 6.22704 50.9947 6.13794 51.9808 4.91575C52.5394 4.24375 52.7193 3.03109 52.4067 2.03295V2.03542ZM21.6358 9.16523C21.3749 8.10874 20.4812 7.19772 19.462 6.95575C17.1053 6.37416 14.9605 7.27613 13.7211 9.36873L13.6047 9.56353L13.5225 9.35295C12.9048 7.80463 11.9282 6.94687 10.6195 6.80567C8.44115 6.46589 6.76009 7.29849 5.15714 9.50747L4.95639 9.78528V6.57537C4.65525 6.72972 0 9.10917 0 9.10917V23.3602H4.95639L4.96654 12.6908C4.96654 11.8577 5.78987 11.1258 6.61419 11.153C7.3866 11.1781 8.16294 11.9099 8.16294 12.6908L8.16539 23.3484H13.3376C13.3376 23.1541 13.3286 12.6908 13.3286 12.6908C13.3374 11.848 14.2237 11.1153 15.0688 11.153C15.8417 11.1873 16.5799 11.92 16.5799 12.6908V23.3441H21.781L21.7722 11.0006C21.7722 10.4921 21.7722 9.75569 21.6358 9.16523ZM36.1198 21.3459C35.676 21.303 35.5539 20.3583 35.5539 20.3583C35.5539 20.3494 34.6107 14.7311 34.6107 14.7311C34.6107 14.7382 34.3877 13.6391 34.3877 13.6391C34.1584 12.4703 33.9197 11.2596 33.4761 10.1473C32.0267 6.77443 27.868 6.21964 24.8052 7.13065C24.3139 7.28041 23.8487 7.53323 23.8487 7.53323V9.62386C25.108 9.07531 26.3369 9.04178 27.3312 9.51619C28.6243 10.1448 28.989 11.7449 29.0561 12.4072C29.0561 12.4185 29.1696 13.1477 29.1696 13.1477C27.6757 13.3739 25.8196 13.7443 24.4503 14.7132C22.9209 15.8078 22.1159 17.5519 22.2946 19.3736C22.3502 21.3115 23.8441 22.8628 25.2868 23.4002C27.2041 24.0802 29.8356 23.9704 31.4007 22.162C31.4097 22.153 31.5923 21.9482 31.5923 21.9482L32.0354 22.3813C33.1772 23.5831 34.4281 23.5453 35.8775 23.5026L36.6463 23.4871L36.6458 21.4251C36.6458 21.4251 36.1332 21.351 36.1198 21.3459ZM29.5477 15.6281L30.4839 20.1848C28.0725 22.9761 24.1006 18.0773 29.5477 15.6281ZM45.927 6.42676C43.6662 6.42676 42.4329 9.05904 42.4198 9.0883L42.2057 9.59427V9.27142L42.2038 6.41098L37.1713 9.16161L37.1758 23.3809L42.2257 23.3791V14.278L42.2459 13.9383C42.2904 13.1882 42.3327 12.4138 42.6829 11.7604C43.4386 10.2944 45.1891 10.3256 46.413 10.4844L47.3002 6.66397C47.3002 6.66397 46.7428 6.4289 45.927 6.42676ZM118.04 6.66413C118.04 6.66413 117.483 6.42923 116.667 6.42693C114.406 6.42693 113.173 9.0592 113.16 9.08862L112.946 9.5946V9.27142L112.944 6.41098L107.911 9.16194L107.916 23.3811L112.966 23.3791V14.278L112.985 13.9383C113.03 13.1882 113.072 12.4139 113.423 11.7604C114.179 10.2945 115.929 10.3256 117.153 10.4846L118.04 6.66413ZM107.427 1.87137C107.232 1.31822 106.822 0.786763 106.305 0.421503C105.138 -0.285346 103.463 -0.0826613 102.565 0.875695C101.886 1.51301 101.561 2.58035 101.735 3.60002C101.873 4.55378 102.651 5.31947 103.31 5.62605C104.398 6.06298 106.015 5.97389 107.001 4.75153C107.56 4.07953 107.739 2.86671 107.427 1.86874V1.87137ZM125.014 21.2127C123.014 21.0651 122.065 17.353 122.065 17.353L130.757 14.5342C130.757 14.5342 130.593 10.7219 128.496 8.65284C126.576 6.75915 123.664 6.19531 120.984 7.30441C119.389 7.92413 117.916 9.58917 117.232 11.5432C115.895 15.263 116.69 19.4251 119.21 21.8977C121.535 24.1325 125.152 24.0909 127.763 23.3055C127.753 23.3078 129.079 22.7374 129.079 22.7374L129.077 20.3759C129.077 20.3759 127.49 21.3944 125.014 21.2126V21.2127ZM121.946 14.976C121.808 13.3754 122.005 11.6645 122.389 10.8793C122.777 10.0813 123.217 9.77378 123.757 9.70835C126.061 9.42758 126.317 13.6715 126.317 13.6715L121.946 14.986C121.949 14.9887 121.946 14.9737 121.946 14.976ZM102.18 9.16293V23.341L107.306 23.3389L107.296 6.41098L102.18 9.16293ZM64.7974 8.65284C62.8772 6.75898 59.9648 6.19531 57.2852 7.30457C55.6906 7.9243 54.2168 9.58901 53.5327 11.543C52.1965 15.2629 52.9915 19.4249 55.5113 21.8976C57.836 24.1332 61.4533 24.0911 64.0639 23.3057C64.0541 23.3076 65.3801 22.7372 65.3801 22.7372L65.3777 20.376C65.3777 20.376 63.7909 21.3945 61.3155 21.2124C59.3153 21.0653 58.3659 17.3533 58.3659 17.3533L67.0583 14.534C67.0583 14.534 66.8948 10.7219 64.7974 8.65284ZM58.247 14.9862C58.2496 14.9887 58.247 14.9736 58.247 14.9763C58.109 13.3759 58.306 11.6647 58.69 10.8791C59.0787 10.0812 59.5185 9.77394 60.0578 9.70852C62.3629 9.42775 62.6182 13.6713 62.6182 13.6713L58.247 14.9862ZM77.9006 20.6517C76.5564 19.9499 75.4321 18.9193 75.2883 15.9618C75.121 12.5173 75.803 10.0973 77.6354 9.39586C79.0256 8.86358 80.9341 10.0378 80.9341 10.0378L80.9531 7.25394C80.9531 7.25394 78.3364 5.98063 75.399 6.92238C72.7469 7.77323 71.0377 9.84808 70.4317 13.2413C69.9904 15.713 70.3405 18.443 71.5599 20.5892C72.9649 22.9126 75.6278 24.1213 78.6657 23.7073C79.4921 23.5945 81.2135 23.0624 81.2135 23.0624L81.1895 20.4901C81.1895 20.4901 79.2863 21.3756 77.9006 20.6517ZM101.128 21.1812C100.684 21.1384 100.562 20.194 100.562 20.194C100.562 20.1852 99.6194 14.5669 99.6194 14.5669C99.6194 14.5734 99.3964 13.4749 99.3964 13.4749C99.1668 12.3061 98.9281 11.0954 98.4848 9.98271C97.0355 6.60989 92.8767 6.05558 89.8139 6.96627C89.3227 7.11586 88.8571 7.36901 88.8571 7.36901V9.45931C90.1169 8.91076 91.3456 8.87739 92.3396 9.35164C93.6331 9.98057 93.9979 11.5803 94.0647 12.2431C94.0647 12.2542 94.1784 12.9837 94.1784 12.9837C92.6841 13.2094 90.828 13.5797 89.4591 14.5491C87.9297 15.6434 87.1247 17.3874 87.3033 19.2091C87.3588 21.1473 88.8529 22.6983 90.2954 23.2356C92.2129 23.9162 94.844 23.8062 96.4095 21.9975C96.4181 21.9886 96.601 21.7841 96.601 21.7841L97.0443 22.2168C98.1857 23.4189 99.4365 23.3811 100.886 23.3384L101.655 23.3226L101.655 21.2602C101.655 21.2602 101.142 21.1868 101.128 21.1813V21.1812ZM94.5565 15.4639L95.4926 20.0206C93.0812 22.8119 89.109 17.9132 94.5565 15.4639ZM81.7113 23.3099H86.7497V1.31509L81.7113 4.02315V23.3099Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="131" height="24" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Partners6;