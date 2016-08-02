const React = require('react');

// <Services />
class Services extends React.Component {

  render() {
    return (
      <div className="services">
        <ul className="icons">
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333.724 333.724">
              <path d="M330.938 214.28l-52.918-39.906v-16.026c0-2.197-1.03-4.266-2.785-5.59L171.077 74.215c-2.496-1.882-5.934-1.882-8.43 0L58.49 152.76c-1.755 1.322-2.786 3.39-2.786 5.588v16.026L2.786 214.28C1.032 215.6 0 217.67 0 219.867v70.722c0 3.866 3.135 7 7 7H326.724c3.866 0 7-3.134 7-7v-70.722c0-2.197-1.03-4.266-2.785-5.59zM174.43 283.59h-15.138v-35.287h15.14v35.286zm14 0v-42.287c0-3.866-3.133-7-7-7h-29.138c-3.866 0-7 3.134-7 7v42.286H69.704V161.835l97.158-73.267 97.158 73.266V283.59H188.43zM14 223.355l41.704-31.448v91.68H14v-60.232zm305.723 60.233H278.02v-91.682l41.703 31.448v60.233z"/>
              <path d="M11.215 169.273l155.647-117.37 155.646 117.37c1.263.953 2.742 1.413 4.21 1.413 2.12 0 4.218-.96 5.594-2.786 2.328-3.086 1.713-7.476-1.374-9.803l-159.86-120.55c-2.497-1.883-5.935-1.883-8.43 0L2.785 158.096c-3.087 2.327-3.702 6.716-1.374 9.802 2.327 3.086 6.718 3.7 9.803 1.373z"/>
            </svg>
            <h2>Residential</h2>
            <p>Bicycle rights four dollar toast gastropub pitchfork man braid DIY thundercats brunch, +1 typewriter try-hard tilde kitsch chambray.</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 463.001 463.001">
              <path d="M441.045 308.903c-3.285-8.994-10.277-15.956-19.184-19.102-8.9-3.144-18.636-2.162-26.705 2.69l-78.17 46.903-10.75 4.607H249.83c-.69 0-1.077-.386-1.278-.71-.202-.324-.38-.84-.073-1.46.173-.354.473-.622.844-.754l42.802-15.295c16.563-5.565 26.054-22.51 21.614-38.614-2.33-8.452-7.86-15.368-15.573-19.475-7.593-4.043-16.624-4.797-24.766-2.07l-44.165 14.72-115.97 7.732c-7.614.508-14.778 3.76-20.173 9.154L30.008 360.31c-12.102 12.1-13.223 31.297-2.553 43.7 2.82 3.28 14.975 14.926 33.195 32.322 10.618 10.137 20.646 19.71 25.407 24.472 1.458 1.458 3.378 2.197 5.306 2.197 1.698 0 3.403-.574 4.8-1.737l34.65-28.875c7.263-6.054 16.47-9.387 25.926-9.387H275.36c4.294 0 8.473-.856 12.42-2.548l55.987-23.995c.155-.067.31-.14.46-.216l2.84-1.452c.152-.077.3-.16.445-.247l79.285-47.57c13.38-8.028 19.37-24.037 14.245-38.067zm-21.962 25.204l-79.067 47.44-2.39 1.222-55.753 23.894c-2.07.887-4.26 1.336-6.512 1.336H156.74c-12.958 0-25.576 4.568-35.53 12.864l-29.436 24.53c-5.38-5.224-12.912-12.415-20.765-19.912-13.203-12.604-29.633-28.29-32.184-31.255-5.488-6.38-4.686-16.837 1.79-23.312l63.083-63.084c2.823-2.824 6.575-4.526 10.562-4.792l116.93-7.797c.638-.04 1.267-.165 1.872-.367l45.088-15.027c1.724-.577 3.49-.863 5.247-.863 2.655 0 5.288.654 7.715 1.946 4.04 2.15 6.94 5.78 8.163 10.222 2.288 8.298-3.086 17.46-11.98 20.425l-.15.053-42.872 15.32c-4.063 1.452-7.35 4.384-9.256 8.256-2.534 5.152-2.236 11.137.798 16.01S244.09 359 249.83 359h57.944c1.016 0 2.02-.206 2.954-.606l12.635-5.414c.312-.133.614-.288.904-.462l78.612-47.168c4.223-2.542 9.318-3.052 13.985-1.405 4.737 1.674 8.32 5.262 10.09 10.105 2.62 7.17-.765 15.793-7.872 20.057zM291.642 239c65.893 0 119.5-53.607 119.5-119.5S357.535 0 291.642 0s-119.5 53.607-119.5 119.5S225.75 239 291.642 239zm0-224c57.62 0 104.5 46.878 104.5 104.5S349.262 224 291.642 224s-104.5-46.878-104.5-104.5S234.022 15 291.642 15z"/>
              <path d="M251.142 147.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5c0 14.5 12.944 26.706 32 32.27v3.73c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-.897c2.766.26 5.603.397 8.5.397s5.734-.136 8.5-.397v.897c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-3.73c19.056-5.564 32-17.768 32-32.27s-12.944-26.706-32-32.27V75.008c10.58 4.023 17 10.47 17 16.493 0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5c0-14.5-12.944-26.706-32-32.27V55.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v.897c-2.766-.26-5.603-.397-8.5-.397s-5.734.136-8.5.397V55.5c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v3.73c-19.056 5.564-32 17.768-32 32.27s12.944 26.706 32 32.27v40.223c-10.58-4.023-17-10.47-17-16.493zm64-16.493c10.58 4.023 17 10.47 17 16.493s-6.42 12.47-17 16.493v-32.986zm-32-59.533c2.71-.308 5.55-.474 8.5-.474s5.79.166 8.5.474v40.923c-2.766-.26-5.603-.397-8.5-.397-2.95 0-5.79-.166-8.5-.474V71.474zm0 55.13c2.766.26 5.603.396 8.5.396 2.95 0 5.79.166 8.5.474v40.052c-2.71.308-5.55.474-8.5.474s-5.79-.166-8.5-.474v-40.923zm-32-35.104c0-6.022 6.42-12.47 17-16.493v32.985c-10.58-4.022-17-10.47-17-16.492z"/>
            </svg>
            <h2>Investment</h2>
            <p>Bicycle rights four dollar toast gastropub pitchfork man braid DIY thundercats brunch, +1 typewriter try-hard tilde kitsch chambray.</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511 511">
              <path d="M503.5 404h-4.894l-114.49-114.49c-4.437-4.437-10.34-6.882-16.616-6.882s-12.18 2.445-16.617 6.883l-7.383 7.384-71.383-71.383c-2.61-2.61-5.732-4.525-9.135-5.665.005-.115.017-.23.017-.345V179H343.503c.092 0 .183-.01.274-.015.175-.006.35-.01.52-.03.102-.01.202-.03.302-.046.172-.026.343-.053.51-.09.093-.02.184-.047.275-.07.18-.047.36-.098.535-.158.08-.028.16-.058.242-.088.192-.073.38-.154.563-.24.043-.02.086-.035.13-.056.027-.014.053-.032.08-.046.14-.072.275-.15.41-.23.085-.05.172-.1.255-.156.108-.07.21-.147.315-.223.1-.073.202-.146.298-.223.078-.063.152-.13.227-.198.11-.097.22-.193.325-.295.06-.06.117-.124.176-.186.108-.112.216-.225.315-.344.06-.07.113-.146.17-.22.088-.114.178-.228.26-.347.065-.098.124-.2.186-.3.063-.1.128-.2.186-.303.07-.126.13-.257.194-.387.04-.084.084-.166.12-.25.063-.143.116-.29.17-.435.028-.08.06-.16.088-.242.045-.14.082-.28.12-.423.024-.097.052-.193.074-.29.027-.123.046-.248.067-.372.02-.125.042-.25.056-.375.012-.102.018-.206.026-.31.01-.152.02-.303.023-.456 0-.033.005-.065.005-.098 0-.062-.008-.12-.01-.18-.003-.158-.01-.314-.023-.47-.01-.103-.022-.204-.034-.304-.018-.14-.038-.278-.064-.416-.023-.12-.05-.237-.077-.354-.027-.115-.056-.23-.09-.344-.04-.138-.084-.274-.13-.41-.034-.092-.066-.185-.103-.277-.06-.15-.125-.297-.194-.442-.025-.052-.043-.106-.07-.158l-14.32-28.645 14.322-28.646c.026-.052.044-.105.07-.158.068-.145.133-.292.193-.442.038-.092.07-.185.103-.278.047-.135.092-.27.132-.41.033-.113.06-.228.09-.343.027-.117.053-.235.075-.354.026-.14.046-.278.064-.417.013-.1.026-.2.034-.303.014-.157.02-.313.024-.47 0-.06.01-.12.01-.18 0-.033-.006-.065-.006-.098-.002-.153-.012-.304-.023-.456-.008-.104-.014-.207-.026-.31-.015-.126-.036-.25-.057-.375-.02-.123-.04-.248-.067-.37-.022-.098-.05-.194-.075-.29-.037-.143-.074-.285-.12-.424-.026-.082-.058-.16-.088-.242-.053-.146-.106-.292-.168-.434-.037-.085-.08-.167-.12-.25-.064-.13-.125-.262-.195-.388-.057-.104-.122-.203-.185-.304-.062-.1-.12-.2-.187-.298-.082-.12-.172-.233-.26-.348-.057-.073-.11-.148-.17-.22-.098-.118-.206-.23-.313-.344-.06-.062-.115-.126-.176-.186-.104-.102-.215-.2-.325-.295-.075-.066-.148-.134-.226-.198-.096-.08-.198-.15-.298-.224-.104-.076-.207-.152-.315-.223-.082-.054-.17-.104-.255-.156-.134-.08-.27-.158-.408-.23-.028-.015-.054-.032-.082-.046-.052-.025-.105-.043-.157-.068-.146-.07-.292-.135-.443-.194-.09-.036-.183-.068-.274-.1-.136-.048-.273-.093-.413-.133-.112-.032-.224-.06-.336-.086-.12-.03-.24-.057-.364-.08-.134-.024-.268-.043-.402-.06-.106-.014-.212-.027-.32-.036-.15-.013-.3-.02-.45-.023-.064 0-.127-.01-.193-.01H263v-.5c0-4.14-3.358-7.5-7.5-7.5s-7.5 3.36-7.5 7.5v120c0 .117.012.23.017.346-3.403 1.14-6.523 3.054-9.135 5.666L191.5 272.894l-7.383-7.383c-4.438-4.437-10.34-6.882-16.617-6.882s-12.18 2.445-16.617 6.883L12.393 404H7.5c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h496c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5zm-52.894 0l-56.5-56.5 13.393-13.393L477.392 404h-26.787zm-128 0l-96.5-96.5 9.726-9.726c6.434-6.434 16.9-6.434 23.335 0l6.06 6.06c12.28 12.28 32.265 12.28 44.547 0l9.726-9.727L429.393 404H322.606zm38.883-103.883c1.604-1.605 3.74-2.49 6.01-2.49s4.405.884 6.01 2.49l23.383 23.383-13.393 13.394-29.394-29.394 7.383-7.383zM331.364 115l-10.573 21.146c-.023.046-.04.094-.062.14-.06.126-.114.253-.167.38-.045.11-.088.22-.127.328-.04.113-.076.227-.11.34-.038.126-.075.25-.106.377-.026.105-.047.21-.068.316-.027.134-.053.268-.073.402-.017.107-.027.214-.037.322-.013.13-.026.262-.032.393-.005.12-.004.237-.004.357s0 .238.005.357c.007.13.02.262.033.393.01.107.02.215.036.322.018.134.045.268.072.402.02.106.042.21.068.315.03.125.068.25.106.375.035.115.07.23.11.34.04.11.082.22.127.328.052.128.107.255.167.38.022.047.04.094.062.14L331.365 164H263v-49h68.365zM249.49 236.117c1.604-1.605 3.74-2.49 6.01-2.49s4.405.884 6.01 2.49l47.383 47.383-9.726 9.726c-6.434 6.434-16.9 6.434-23.335 0l-6.06-6.06c-12.28-12.28-32.265-12.28-44.547 0l-9.726 9.727-13.394-13.393 47.383-47.383zm-88 40c1.604-1.605 3.74-2.49 6.01-2.49s4.405.884 6.01 2.49l47.383 47.383-6.704 6.704c-3.69 3.688-9.69 3.688-13.38 0l-16.015-16.015c-9.537-9.54-25.056-9.538-34.606.014-1.788 1.787-4.164 2.77-6.69 2.77s-4.902-.983-6.69-2.77l-6.703-6.704 31.382-31.383zm-41.99 41.99l6.704 6.703c4.62 4.62 10.762 7.165 17.296 7.165s12.676-2.544 17.31-7.18c3.69-3.687 9.69-3.687 13.38 0l16.015 16.016c4.77 4.77 11.032 7.154 17.296 7.154s12.528-2.384 17.297-7.153l6.704-6.703L301.394 404H33.606l85.894-85.894z"/>
            </svg>
            <h2>Land</h2>
            <p>Bicycle rights four dollar toast gastropub pitchfork man braid DIY thundercats brunch, +1 typewriter try-hard tilde kitsch chambray.</p>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 279.131 279.131">
              <path d="M276.346 109.82l-93.71-70.665c-2.496-1.882-5.934-1.882-8.43 0L158.8 50.772l-15.404-11.617c-2.496-1.882-5.934-1.882-8.43 0l-15.02 11.327-15.022-11.327c-2.496-1.882-5.934-1.882-8.43 0L2.784 109.82C1.03 111.145 0 113.215 0 115.41v118.977c0 3.866 3.134 7 7 7H272.13c3.867 0 7-3.134 7-7V115.41c0-2.196-1.03-4.266-2.784-5.59zM265.13 227.388h-25.237V115.41c0-2.197-1.03-4.266-2.785-5.59l-66.68-50.28 7.993-6.03 86.71 65.39v108.487zm-63.71 0V115.41c0-2.197-1.03-4.266-2.784-5.59l-67.064-50.57 7.61-5.738 86.71 65.388v108.488h-24.47zm-89.246 0H89.246v-50.76h22.928v50.76zm14 0v-57.76c0-3.867-3.134-7-7-7H82.246c-3.866 0-7 3.133-7 7v57.76H14v-108.49l86.71-65.387 86.71 65.388v108.488h-61.246z"/>
            </svg>
            <h2>Estate</h2>
            <p>Bicycle rights four dollar toast gastropub pitchfork man braid DIY thundercats brunch, +1 typewriter try-hard tilde kitsch chambray.</p>
          </li>
        </ul>
      </div>
    )
  }
};

export default Services;
