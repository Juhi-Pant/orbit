var dashboard = document.querySelector('.left_dashboard');
var dashBord_right =  document.querySelector('.dashBord_right');
dashboard.addEventListener("click", dashboardResize);
function dashboardResize(){
    dashboard.classList.toggle("resize");
    dashBord_right.classList.toggle("resize-right");
}


var iconshow =  document.querySelector('.iconshow');
var fullchat =  document.querySelector('.fullchat');
var dashboardchat =  document.querySelector('.dashboard-chat');
iconshow.addEventListener("click", chatResize);
function chatResize(){
    dashboardchat.classList.toggle("resized");
    dashBord_right.classList.toggle("resized");
}
var iconshowplay =  document.querySelector('.iconshowplay');

iconshowplay.addEventListener("click", VResize);
function VResize(){
    dashBord_right.classList.toggle("wide_video");
    dashboardchat.classList.toggle("chatResized");
}




const tabElements = [
    {
        id: 'profile',
        triggerEl: document.querySelector('#profile-tab-example'),
        targetEl: document.querySelector('#profile-example')
    },
    {
        id: 'dashboard',
        triggerEl: document.querySelector('#dashboard-tab-example'),
        targetEl: document.querySelector('#dashboard-example')
    },
    {
        id: 'settings',
        triggerEl: document.querySelector('#settings-tab-example'),
        targetEl: document.querySelector('#settings-example')
    },
    {
        id: 'contacts',
        triggerEl: document.querySelector('#contacts-tab-example'),
        targetEl: document.querySelector('#contacts-example')
    }
];

// options with default values
const options = {
    defaultTabId: 'settings',
    activeClasses: 'text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 border-blue-600 dark:border-blue-500',
    inactiveClasses: 'text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300',
    onShow: () => {
        console.log('tab is shown');
    }
};