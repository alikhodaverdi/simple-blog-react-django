
const Home = () => {
    return (
        <>


            <div className="text-gray-700">

                {/* <!-- =========== Navbar Start =========== --> */}
                <header id="navbar" className="dark fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5">
                    <div className="container">
                        <nav className="flex items-center">
                            {/* <!-- Navbar Brand Logo --> */}
                            <a href="index.html">
                                <img src="assets/images/logo-dark.png" className="h-8 logo-dark" alt="Logo Dark" />
                                <img src="assets/images/logo-light.png" className="h-8 logo-light" alt="Logo Light" />
                            </a>

                            {/* <!-- Nevigation Menu --> */}
                            <div className="hidden lg:block ms-auto">
                                <ul className="navbar-nav flex gap-x-3 items-center justify-center">
                                    {/* <!-- Home Page Link --> */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="index.html">Home</a>
                                    </li>

                                    {/* <!-- Home Page Dropdown --> */}
                                    <li className="nav-item">
                                        <a href="javascript:void(0);" className="nav-link after:absolute hover:after:-bottom-10 after:inset-0" data-fc-type="dropdown" data-fc-trigger="hover" data-fc-target="landingDropdownMenu" data-fc-placement="bottom">
                                            Landing <i className="fa-solid fa-angle-down ms-2 align-middle"></i>
                                        </a>

                                        <div id="landingDropdownMenu" className="hidden opacity-0 mt-4 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 w-96 fc-dropdown-open:grid grid-cols-2 gap-1.5">
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-app.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-blue-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-blue-600 w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                                                                    <path d="M8,2.5 C7.30964406,2.5 6.75,3.05964406 6.75,3.75 L6.75,20.25 C6.75,20.9403559 7.30964406,21.5 8,21.5 L16,21.5 C16.6903559,21.5 17.25,20.9403559 17.25,20.25 L17.25,3.75 C17.25,3.05964406 16.6903559,2.5 16,2.5 L8,2.5 Z M8,1 L16,1 C17.5187831,1 18.75,2.23121694 18.75,3.75 L18.75,20.25 C18.75,21.7687831 17.5187831,23 16,23 L8,23 C6.48121694,23 5.25,21.7687831 5.25,20.25 L5.25,3.75 C5.25,2.23121694 6.48121694,1 8,1 Z M9.5,1.75 L14.5,1.75 C14.7761424,1.75 15,1.97385763 15,2.25 L15,3.25 C15,3.52614237 14.7761424,3.75 14.5,3.75 L9.5,3.75 C9.22385763,3.75 9,3.52614237 9,3.25 L9,2.25 C9,1.97385763 9.22385763,1.75 9.5,1.75 Z" id="Combined-Shape" fill="currentColor"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">
                                                            App
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-saas.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-green-500/20 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-green-500 w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path d="M6,8 L6,16 L18,16 L18,8 L6,8 Z M20,16 L21.381966,16 C21.7607381,16 22.1070012,16.2140024 22.2763932,16.5527864 L22.5,17 C22.6706654,17.3413307 22.5323138,17.7563856 22.190983,17.927051 C22.0950363,17.9750244 21.9892377,18 21.881966,18 L2.11803399,18 C1.73641461,18 1.42705098,17.6906364 1.42705098,17.309017 C1.42705098,17.2017453 1.45202663,17.0959467 1.5,17 L1.7236068,16.5527864 C1.89299881,16.2140024 2.23926193,16 2.61803399,16 L4,16 L4,8 C4,6.8954305 4.8954305,6 6,6 L18,6 C19.1045695,6 20,6.8954305 20,8 L20,16 Z" id="Combined-Shape" fill="currentColor"></path>
                                                                    <polygon id="Combined-Shape" fill="currentColor" opacity="0.3" points="6 8 6 16 18 16 18 8"></polygon>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">Saas Modern</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-saas2.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-primary/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-primary w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <polygon id="Combined-Shape" fill="currentColor" opacity="0.3" points="6 7 6 15 18 15 18 7"></polygon>
                                                                    <path d="M11,19 L11,16 C11,15.4477153 11.4477153,15 12,15 C12.5522847,15 13,15.4477153 13,16 L13,19 L14.5,19 C14.7761424,19 15,19.2238576 15,19.5 C15,19.7761424 14.7761424,20 14.5,20 L9.5,20 C9.22385763,20 9,19.7761424 9,19.5 C9,19.2238576 9.22385763,19 9.5,19 L11,19 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                                                                    <path d="M6,7 L6,15 L18,15 L18,7 L6,7 Z M6,5 L18,5 C19.1045695,5 20,5.8954305 20,7 L20,15 C20,16.1045695 19.1045695,17 18,17 L6,17 C4.8954305,17 4,16.1045695 4,15 L4,7 C4,5.8954305 4.8954305,5 6,5 Z" id="Combined-Shape" fill="currentColor"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">Saas Classic</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-startup.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-orange-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-orange-600 w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <rect id="Combined-Shape" fill="currentColor" opacity="0.3" x="2" y="3" width="20" height="18" rx="2"></rect>
                                                                    <path d="M9.9486833,13.3162278 C9.81256925,13.7245699 9.43043041,14 9,14 L5,14 C4.44771525,14 4,13.5522847 4,13 C4,12.4477153 4.44771525,12 5,12 L8.27924078,12 L10.0513167,6.68377223 C10.367686,5.73466443 11.7274983,5.78688777 11.9701425,6.75746437 L13.8145063,14.1349195 L14.6055728,12.5527864 C14.7749648,12.2140024 15.1212279,12 15.5,12 L19,12 C19.5522847,12 20,12.4477153 20,13 C20,13.5522847 19.5522847,14 19,14 L16.118034,14 L14.3944272,17.4472136 C13.9792313,18.2776054 12.7550291,18.143222 12.5298575,17.2425356 L10.8627389,10.5740611 L9.9486833,13.3162278 Z" id="Path-108" fill="currentColor"></path>
                                                                    <circle id="Oval" fill="currentColor" opacity="0.3" cx="19" cy="6" r="1"></circle>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">Startup</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-software.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-amber-400/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-amber-400 w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path d="M4,9.67471899 L10.880262,13.6470401 C10.9543486,13.689814 11.0320333,13.7207107 11.1111111,13.740321 L11.1111111,21.4444444 L4.49070127,17.526473 C4.18655139,17.3464765 4,17.0193034 4,16.6658832 L4,9.67471899 Z M20,9.56911707 L20,16.6658832 C20,17.0193034 19.8134486,17.3464765 19.5092987,17.526473 L12.8888889,21.4444444 L12.8888889,13.6728275 C12.9050191,13.6647696 12.9210067,13.6561758 12.9368301,13.6470401 L20,9.56911707 Z" id="Combined-Shape" fill="currentColor"></path>
                                                                    <path d="M4.21611835,7.74669402 C4.30015839,7.64056877 4.40623188,7.55087574 4.5299008,7.48500698 L11.5299008,3.75665466 C11.8237589,3.60013944 12.1762411,3.60013944 12.4700992,3.75665466 L19.4700992,7.48500698 C19.5654307,7.53578262 19.6503066,7.60071528 19.7226939,7.67641889 L12.0479413,12.1074394 C11.9974761,12.1365754 11.9509488,12.1699127 11.9085461,12.2067543 C11.8661433,12.1699127 11.819616,12.1365754 11.7691509,12.1074394 L4.21611835,7.74669402 Z" id="Path" fill="currentColor" opacity="0.3"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">Software</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-agency.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-black/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-black w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path d="M12,10.9996338 C12.8356605,10.3719448 13.8743941,10 15,10 C17.7614237,10 20,12.2385763 20,15 C20,17.7614237 17.7614237,20 15,20 C13.8743941,20 12.8356605,19.6280552 12,19.0003662 C11.1643395,19.6280552 10.1256059,20 9,20 C6.23857625,20 4,17.7614237 4,15 C4,12.2385763 6.23857625,10 9,10 C10.1256059,10 11.1643395,10.3719448 12,10.9996338 Z M13.3336047,12.504354 C13.757474,13.2388026 14,14.0910788 14,15 C14,15.9088933 13.7574889,16.761145 13.3336438,17.4955783 C13.8188886,17.8206693 14.3938466,18 15,18 C16.6568542,18 18,16.6568542 18,15 C18,13.3431458 16.6568542,12 15,12 C14.3930587,12 13.8175971,12.18044 13.3336047,12.504354 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                                                                    <circle id="Oval-14" fill="currentColor" cx="12" cy="9" r="5"></circle>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">Agency</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-coworking.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-primary/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-primary w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path d="M3.95709826,8.41510662 L11.47855,3.81866389 C11.7986624,3.62303967 12.2013376,3.62303967 12.52145,3.81866389 L20.0429,8.41510557 C20.6374094,8.77841684 21,9.42493654 21,10.1216692 L21,19.0000642 C21,20.1046337 20.1045695,21.0000642 19,21.0000642 L4.99998155,21.0000673 C3.89541205,21.0000673 2.99998155,20.1046368 2.99998155,19.0000673 L2.99999828,10.1216672 C2.99999935,9.42493561 3.36258984,8.77841732 3.95709826,8.41510662 Z M10,13 C9.44771525,13 9,13.4477153 9,14 L9,17 C9,17.5522847 9.44771525,18 10,18 L14,18 C14.5522847,18 15,17.5522847 15,17 L15,14 C15,13.4477153 14.5522847,13 14,13 L10,13 Z" id="Combined-Shape" fill="currentColor"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">Coworking</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-crypto.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-orange-600/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-orange-600 w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <rect id="Rectangle" fill="currentColor" opacity="0.3" x="11" y="2" width="2" height="5" rx="1"></rect>
                                                                    <rect id="Rectangle-Copy-3" fill="currentColor" opacity="0.3" x="11" y="16" width="2" height="5" rx="1"></rect>
                                                                    <path d="M17.875,14.086 C17.875,14.8206703 17.7293348,15.4381642 17.438,15.9385 C17.1466652,16.4388358 16.7603357,16.8409985 16.279,17.145 C15.7976643,17.4490015 15.2498364,17.6674993 14.6355,17.8005 C14.0211636,17.9335007 13.3910032,18 12.745,18 L7,18 L7,4.548 L12.745,4.548 C13.2643359,4.548 13.7963306,4.60183279 14.341,4.7095 C14.8856694,4.8171672 15.3796644,5.00083204 15.823,5.2605 C16.2663356,5.52016796 16.6273319,5.87166445 16.906,6.315 C17.1846681,6.75833555 17.324,7.32199658 17.324,8.006 C17.324,8.75333707 17.1213354,9.3708309 16.716,9.8585 C16.3106646,10.3461691 15.77867,10.6976656 15.12,10.913 C15.5000019,11.0143337 15.8578317,11.1314991 16.1935,11.3025 C16.5291683,11.4735009 16.8204988,11.6919987 17.0675,11.958 C17.3145012,12.2240013 17.5108326,12.5343316 17.6565,12.889 C17.8021674,13.2436684 17.875,13.6426645 17.875,14.086 Z M14.189,8.443 C14.189,7.98699772 14.0148351,7.65450105 13.6665,7.4455 C13.3181649,7.23649896 12.8020034,7.132 12.118,7.132 L10.522,7.132 L10.522,9.906 L12.27,9.906 C12.878003,9.906 13.3498317,9.78250124 13.6855,9.5355 C14.0211683,9.28849877 14.189,8.92433574 14.189,8.443 Z M14.626,13.782 C14.626,13.2246639 14.4170021,12.8383344 13.999,12.623 C13.5809979,12.4076656 13.0236701,12.3 12.327,12.3 L10.522,12.3 L10.522,15.378 L12.346,15.378 C12.5993346,15.378 12.8621653,15.3558336 13.1345,15.3115 C13.4068347,15.2671664 13.6538322,15.1880006 13.8755,15.074 C14.0971678,14.9599994 14.277666,14.798501 14.417,14.5895 C14.556334,14.380499 14.626,14.111335 14.626,13.782 Z" id="Combined-Shape" fill="currentColor"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">Crypto</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-marketing.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-blue-500/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-blue-500 w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                                                                    <path d="M12.7037037,14 L15.6666667,10 L13.4444444,10 L13.4444444,6 L9,12 L11.2222222,12 L11.2222222,14 L6,14 C5.44771525,14 5,13.5522847 5,13 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,13 C19,13.5522847 18.5522847,14 18,14 L12.7037037,14 Z" id="Combined-Shape" fill="currentColor" opacity="0.3"></path>
                                                                    <path d="M9.80428954,10.9142091 L9,12 L11.2222222,12 L11.2222222,16 L15.6666667,10 L15.4615385,10 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9.80428954,10.9142091 Z" id="Combined-Shape" fill="currentColor"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">Marketing</div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="nav-item">
                                                <a className="nav-link" href="home-portfolio.html">
                                                    <div className="flex items-center -ms-1.5">
                                                        <span className="bg-red-500/10 flex justify-center items-center w-8 h-8 shadow rounded me-3">
                                                            <svg className="text-red-500 w-6 h-6" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                                                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                                    <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                                                                    <path d="M6,5 L18,5 C19.6568542,5 21,6.34314575 21,8 L21,17 C21,18.6568542 19.6568542,20 18,20 L6,20 C4.34314575,20 3,18.6568542 3,17 L3,8 C3,6.34314575 4.34314575,5 6,5 Z M5,17 L14,17 L9.5,11 L5,17 Z M16,14 C17.6568542,14 19,12.6568542 19,11 C19,9.34314575 17.6568542,8 16,8 C14.3431458,8 13,9.34314575 13,11 C13,12.6568542 14.3431458,14 16,14 Z" id="Rectangle-25" fill="currentColor"></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                        <div className="flex-grow-1">Portfolio</div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </li>

                                    {/* <!-- Inner Page Dropdown --> */}
                                    <li className="nav-item">
                                        <a href="javascript:void(0);" className="nav-link after:absolute hover:after:-bottom-10 after:inset-0" data-fc-trigger="hover" data-fc-target="innerPageDropdownMenu" data-fc-type="dropdown" data-fc-placement="bottom">
                                            Pages <i className="fa-solid fa-angle-down ms-2 align-middle"></i>
                                        </a>

                                        <div id="innerPageDropdownMenu" className="hidden opacity-0 mt-4 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 w-48 space-y-1.5">
                                            {/* <!-- Dropdown item --> */}
                                            <div className="nav-item">
                                                <a className="nav-link after:absolute after:inset-0 after:-end-10" data-fc-offset="8" data-fc-placement="right-start" data-fc-trigger="hover" data-fc-type="dropdown" type="button">
                                                    Account <i className="fa-solid fa-angle-right ms-auto align-middle"></i>
                                                </a>

                                                <div className="ms-2 hidden w-48 opacity-0 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 space-y-1.5">
                                                    <div className="nav-item">
                                                        <a className="nav-link" href="account-dashboard.html">Dashboard</a>
                                                    </div>

                                                    <div className="nav-item">
                                                        <a className="nav-link" href="account-settings.html">Settings</a>
                                                    </div>

                                                    <div className="nav-item">
                                                        <a className="nav-link" href="account-login.html">Login</a>
                                                    </div>

                                                    <div className="nav-item">
                                                        <a className="nav-link" href="account-signup.html">Sign Up</a>
                                                    </div>

                                                    <div className="nav-item">
                                                        <a className="nav-link" href="account-forget-password.html">Forget Password</a>
                                                    </div>

                                                    <div className="nav-item">
                                                        <a className="nav-link" href="account-confirm.html">Confirm Account</a>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Dropdown item --> */}
                                            <div className="nav-item">
                                                <a className="nav-link after:absolute after:inset-0 after:-end-10" data-fc-offset="8" data-fc-placement="right-start" data-fc-trigger="hover" data-fc-type="dropdown" type="button">
                                                    Blog <i className="fa-solid fa-angle-right ms-auto align-middle"></i>
                                                </a>

                                                <div className="ms-2 hidden w-48 opacity-0 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 space-y-1.5">
                                                    <div className="nav-item">
                                                        <a className="nav-link" href="blog.html">Blog</a>
                                                    </div>

                                                    <div className="nav-item">
                                                        <a className="nav-link" href="blog-post.html">Blog Post</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="-mx-2 my-2">

                                                {/* <!-- Dropdown item --> */}
                                                <div className="nav-item">
                                                    <a className="nav-link" href="company.html">Company</a>
                                                </div>

                                                {/* <!-- Dropdown item --> */}
                                                <div className="nav-item">
                                                    <a className="nav-link" href="career.html">Career</a>
                                                </div>

                                                {/* <!-- Dropdown item --> */}
                                                <div className="nav-item">
                                                    <a className="nav-link" href="pricing.html">Pricing</a>
                                                </div>

                                                {/* <!-- Dropdown item --> */}
                                                <div className="nav-item">
                                                    <a className="nav-link after:absolute after:inset-0 after:-end-10" data-fc-offset="8" data-fc-placement="right-start" data-fc-trigger="hover" data-fc-type="dropdown" type="button">
                                                        Portfolio <i className="fa-solid fa-angle-right ms-auto align-middle"></i>
                                                    </a>

                                                    <div className="ms-2 hidden w-48 opacity-0 fc-dropdown-open:opacity-100 fc-dropdown-open:translate-y-0 translate-y-3 origin-center transition-all bg-white rounded-lg shadow-lg border p-2 space-y-1.5">
                                                        <div className="nav-item">
                                                            <a className="nav-link" href="portfolio-grid.html">Portfolio Grid</a>
                                                        </div>

                                                        <div className="nav-item">
                                                            <a className="nav-link" href="portfolio-masonry.html">Portfolio Masonry</a>
                                                        </div>

                                                        <div className="nav-item">
                                                            <a className="nav-link" href="portfolio-item.html">Portfolio Item</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="-mx-2 my-2">

                                                    {/* <!-- Dropdown item --> */}
                                                    <div className="nav-item">
                                                        <a className="nav-link" href="help.html">Help</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>

                                    {/* <!-- Contact Page Link --> */}
                                    <li className="nav-item">
                                        <a className="nav-link" href="contact.html">Contact us</a>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Download Button --> */}
                            <div className="hidden lg:flex items-center ms-3">
                                <a rel="noreferrer" href="https://1.envato.market/prompt-tailwind" target="_blank" className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm">Download</a>
                            </div>

                            {/* <!-- Moblie Menu Toggle Button (Offcanvas Button) --> */}
                            <div className="lg:hidden flex items-center ms-auto px-2.5">
                                <button type="button" data-fc-target="mobileMenu" data-fc-type="offcanvas">
                                    <i className="fa-solid fa-bars text-2xl text-gray-500"></i>
                                </button>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* <!-- =========== Navbar End =========== --> */}

                {/* <!-- =========== Mobile Menu Start (Offcanvas) =========== --> */}
                <div id="mobileMenu" className="fc-offcanvas-open:translate-x-0 translate-x-full fixed top-0 end-0 transition-all duration-200 transform h-full w-full max-w-md z-50 bg-white border-s hidden">
                    <div className="flex flex-col h-full divide-y-2 divide-gray-200">
                        {/* <!-- Mobile Menu Topbar Logo (Header) --> */}
                        <div className="p-6 flex items-center justify-between">
                            <a href="index.html">
                                <img src="assets/images/logo-dark.png" className="h-8" alt="Logo" />
                            </a>

                            <button data-fc-dismiss="" className="flex items-center px-2">
                                <i className="fa-solid fa-xmark text-xl"></i>
                            </button>
                        </div>

                        {/* <!-- Mobile Menu Link List --> */}
                        <div className="p-6 overflow-scroll h-full">
                            <ul className="navbar-nav flex flex-col gap-2" data-fc-type="accordion">
                                {/* <!-- Home Page Link --> */}
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link">Home</a>
                                </li>

                                {/* <!-- Landing Page --> */}
                                <li className="nav-item">
                                    <a href="javascript:void(0)" data-fc-type="collapse" className="nav-link">
                                        Landing <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                                    </a>

                                    <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                        <li className="nav-item mt-2">
                                            <a className="nav-link" href="home-app.html">App</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="home-saas.html">Saas Modern</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="home-saas2.html">Saas Classic</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="home-startup.html">Startup</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="home-software.html">Software</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="home-agency.html">Agency</a>
                                        </li>

                                        <li className="nav-item">

                                            <a className="nav-link" href="home-coworking.html">Coworking</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="home-crypto.html">Crypto</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="home-marketing.html">Marketing</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="home-portfolio.html">Portfolio</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* <!-- Inner Page --> */}
                                <li className="nav-item">
                                    <a href="javascript:void(0)" data-fc-type="collapse" className="nav-link">
                                        Pages <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                                    </a>

                                    <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                        <li className="nav-item mt-2">
                                            <a className="nav-link" href="company.html">Company</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="career.html">Career</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="pricing.html">Pricing</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="help.html">Help</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* <!-- Blog Page --> */}
                                <li className="nav-item">
                                    <a href="javascript:void(0)" data-fc-type="collapse" className="nav-link">
                                        Blog Page <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                                    </a>

                                    <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                        <li className="nav-item mt-2">
                                            <a className="nav-link" href="blog.html">Blog</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="blog-post.html">Blog Post</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* <!-- Portfolio Page --> */}
                                <li className="nav-item">
                                    <a href="javascript:void(0)" data-fc-type="collapse" className="nav-link">
                                        Portfolio <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                                    </a>

                                    <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                        <li className="nav-item mt-2">
                                            <a className="nav-link" href="portfolio-grid.html">Portfolio Grid</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="portfolio-masonry.html">Portfolio Masonry</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="portfolio-item.html">Portfolio Item</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="account-confirm.html">Confirm Account</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* <!-- Auth Page --> */}
                                <li className="nav-item">
                                    <a href="javascript:void(0)" data-fc-type="collapse" className="nav-link">
                                        Account <i className="fa-solid fa-angle-down ms-auto align-middle transition-all fc-collapse-open:rotate-180"></i>
                                    </a>

                                    <ul className="hidden overflow-hidden transition-[height] duration-300 space-y-2">
                                        <li className="nav-item mt-2">
                                            <a className="nav-link" href="account-login.html">Login</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="account-signup.html">Sign Up</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="account-forget-password.html">Forget Password</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link" href="account-confirm.html">Confirm Account</a>
                                        </li>
                                    </ul>
                                </li>

                                {/* <!-- Contact Page Link --> */}
                                <li className="nav-item">
                                    <a className="nav-link" href="contact.html">Contact us</a>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Mobile Menu Download Button (Footer) --> */}
                        <div className="p-6 flex items-center justify-center">
                            <a rel="noreferrer" href="https://1.envato.market/prompt-tailwind" target="_blank" className="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm">Download</a>
                        </div>
                    </div>
                </div>
                {/* <!-- =========== Mobile Menu End =========== --> */}


                <section className="pt-36 pb-20">
                    <div className="container">

                        <div className="absolute inset-0 h-96 bg-cover bg-no-repeat bg-center bg-[url('../images/blog/hero.png')]">
                            <div className="relative w-full h-full z-30 bg-black/10"></div>
                        </div>

                        <div className="relative lg:w-3/5 mx-auto z-30">
                            <div className="text-center text-white">
                                <h2 className="text-5xl font-semibold mb-8">Blog</h2>
                                <p className="text-base/relaxed tracking-wide">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.
                                    <p>
                                    </p>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- =========== listing Section Start =========== --> */}
                <section className="py-24">
                    <div className="container">

                        <div className="flex items-center gap-2">
                            <p>Tags:</p>
                            <div className="flex flex-wrap items-center gap-1">
                                <a href="#" className="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Business</a>
                                <a href="#" className="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Community</a>
                                <a href="#" className="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Announcement</a>
                                <a href="#" className="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Tutorials</a>
                                <a href="#" className="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Resources</a>
                                <a href="#" className="border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Interview</a>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14" data-aos="fade-up" data-aos-duration="300">

                            <div className="lg:col-span-2">
                                <div className="grid md:grid-cols-5 gap-10">

                                    <div className="md:col-span-2 col-span-3">
                                        <img src="assets/images/blog/post1.jpg" className="w-full h-full rounded-md" />
                                    </div>

                                    <div className="col-span-3">
                                        <div className="flex flex-col gap-14 justify-between xl:h-full">
                                            <div>
                                                <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"><a href="#">Announcement</a></span>
                                                <h1 className="text-lg my-3 transition-all hover:text-primary"><a href="#">Announcing the free upgrade for the subscribed plans</a></h1>
                                                <p className="text-sm/relaxed tracking-wider text-gray-500">We are glad to announce that, we are going to upgrade all the subscribed accounts with the premium features this week...
                                                    <a href="#" className="text-primary">read more</a>
                                                </p>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img src="assets/images/avatars/img-2.jpg" className="h-10 w-10 rounded-md" />
                                                    <div>
                                                        <h6 className="text-sm transition-all hover:text-primary"><a href="#">Emily Blunt</a></h6>
                                                        <p className="text-sm text-gray-500">11 Mar, 2020 · 3 min read</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="border rounded-md p-5 w-full">
                                    <h1 className="mb-3">Get the latest on product development from Prompt</h1>
                                    <p className="text-sm/relaxed tracking-wider text-gray-500">We send a weekly newsletter containing latest updates in product development</p>

                                    <div className="flex flex-col md:flex-row lg:flex-col gap-2 mt-7">
                                        <input type="email" className="w-full md:w-1/2 lg:w-full text-sm border-gray-300 focus:border-gray-200 focus:ring-0 rounded-md bg-white py-3" id="Email" placeholder="Enter Your Email" />
                                        <button className="w-full md:w-1/2 lg:w-full bg-primary text-white rounded-md text-sm font-semibold flex-none shadow shadow-primary/50 hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/20 px-8 py-3">Subscribe</button>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2">*No spam ever.</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 lg:py-16 py-14" data-aos="fade-up">
                            <div>
                                <img src="assets/images/blog/blog-1.png" className="rounded-md mb-5" />

                                <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"><a href="#">Announcement</a></span>
                                <h1 className="text-lg my-3 transition-all hover:text-primary"><a href="#">Introducing new blazzing fast user interface</a></h1>
                                <p className="text-sm/relaxed tracking-wider text-gray-500">Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly...
                                    <a href="#" className="text-primary">read more</a>
                                </p>
                            </div>

                            <div>
                                <img src="assets/images/blog/blog-2.png" className="rounded-md mb-5" />

                                <span className="bg-green-500/10 text-green-500 font-medium rounded-md text-xs py-1 px-2"><a href="#">Tutorial</a></span>
                                <h1 className="text-lg my-3 transition-all hover:text-primary"><a href="#">What you should know before considering the Prompt</a></h1>
                                <p className="text-sm/relaxed tracking-wider text-gray-500">We are giving a pretty extensive guideline and context before you make your decision to consider Prompt...
                                    <a href="#" className="text-primary">read more</a>
                                </p>
                            </div>

                            <div>
                                <img src="assets/images/blog/blog-3.png" className="rounded-md mb-5" />

                                <span className="bg-teal-500/10 text-teal-500 font-medium rounded-md text-xs py-1 px-2"><a href="#">Community</a></span>
                                <h1 className="text-lg my-3 transition-all hover:text-primary"><a href="#">Your Way to a Successful Sales Campaigns</a></h1>
                                <p className="text-sm/relaxed tracking-wider text-gray-500">Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads ...
                                    <a href="#" className="text-primary">read more</a>
                                </p>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14" data-aos="fade-up">

                            <div className="lg:col-span-2">
                                <div className="grid md:grid-cols-5 gap-10">

                                    <div className="md:col-span-2 col-span-3">
                                        <img src="assets/images/blog/post1.jpg" className="w-full h-full rounded-md" />
                                    </div>

                                    <div className="col-span-3">
                                        <div className="flex flex-col gap-14 justify-between xl:h-full">
                                            <div>
                                                <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"><a href="#">Community</a></span>
                                                <h1 className="text-lg my-3 transition-all hover:text-primary"><a href="#">Will Web Design Ever Rule the World?</a></h1>
                                                <p className="text-sm/relaxed tracking-wider text-gray-500">The web is changed in the current era a lot. Many new trends are being used in the market at the moment...
                                                    <a href="#" className="text-primary">read more</a>
                                                </p>
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <img src="assets/images/avatars/img-1.jpg" className="h-10 w-10 rounded-md" />
                                                    <div>
                                                        <h6 className="text-sm transition-all hover:text-primary"><a href="#">Greeva N</a></h6>
                                                        <p className="text-sm text-gray-500">9 Mar, 2020 · 5 min read</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <div className="border relative shadow-xl rounded-lg w-full">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        <div className="absolute top-4 right-4 text-sm bg-red-500 text-white rounded py-1 px-3">Resource</div>
                                        <img src="assets/images/blog/post-bg.png" className="w-full" />

                                        <div className="absolute right-5 bottom-3 left-5 text-white">
                                            <h2 className="text-2xl"><a href="#">Top 10 ideas to improve the team productivity</a></h2>
                                            <div className="flex mt-3">
                                                <a href="" className="ms-1 -me-3 shadow-lg">
                                                    <img src="assets/images/avatars/img-1.jpg" alt="image" className="w-8 h-8 shadow-lg border-2 border-white rounded-full" />
                                                </a>
                                                <a href="" className="ms-1 -me-3 shadow-lg">
                                                    <img src="assets/images/avatars/img-2.jpg" alt="image" className="w-8 h-8 shadow-lg border-2 border-white rounded-full" />
                                                </a>
                                                <a href="" className="ms-1 -me-3 shadow-lg">
                                                    <img src="assets/images/avatars/img-3.jpg" alt="image" className="w-8 h-8 shadow-lg border-2 border-white rounded-full" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="grid lg:grid-cols-3 gap-6 lg:py-16 py-14" data-aos="fade-up">
                            <div>
                                <img src="assets/images/blog/blog-1.png" className="rounded-md mb-5" />

                                <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2"><a href="#">Announcement</a></span>
                                <h1 className="text-lg my-3 transition-all hover:text-primary"><a href="#">Introducing new blazzing fast user interface</a></h1>
                                <p className="text-sm/relaxed tracking-wider text-gray-500">Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly...
                                    <a href="#" className="text-primary">read more</a>
                                </p>
                            </div>

                            <div>
                                <img src="assets/images/blog/blog-2.png" className="rounded-md mb-5" />

                                <span className="bg-green-500/10 text-green-500 font-medium rounded-md text-xs py-1 px-2"><a href="#">Tutorial</a></span>
                                <h1 className="text-lg my-3 transition-all hover:text-primary"><a href="#">What you should know before considering the Prompt</a></h1>
                                <p className="text-sm/relaxed tracking-wider text-gray-500">We are giving a pretty extensive guideline and context before you make your decision to consider Prompt...
                                    <a href="#" className="text-primary">read more</a>
                                </p>
                            </div>

                            <div>
                                <img src="assets/images/blog/blog-3.png" className="rounded-md mb-5" />

                                <span className="bg-teal-500/10 text-teal-500 font-medium rounded-md text-xs py-1 px-2"><a href="#">Community</a></span>
                                <h1 className="text-lg my-3 transition-all hover:text-primary"><a href="#">Your Way to a Successful Sales Campaigns</a></h1>
                                <p className="text-sm/relaxed tracking-wider text-gray-500">Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads ...
                                    <a href="#" className="text-primary">read more</a>
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-2">
                            <div className="flex items-center">
                                <a href="javascript:void(0)" className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"><i className="fa-solid fa-arrow-left me-2"></i> Previous</a>
                            </div>

                            <div className="flex items-center">
                                <a href="javascript:void(0)" className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3">Next <i className="fa-solid fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- =========== listing Section end =========== --> */}

                {/* <!-- =========== footer Section start =========== --> */}
                <footer className="bg-gray-100">
                    <div className="container">

                        <div className="py-14 pb-10">
                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 pt-14">

                                <div>
                                    <a href="index.html">
                                        <img src="assets/images/logo-dark.png" className="w-32 mb-3" />
                                    </a>
                                    <p className="text-sm/relaxed tracking-wider text-gray-500">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed consequuntur ratione voluptatem sequi nesciunt.</p>
                                </div>

                                <div>
                                    <div className="flex justify-start sm:justify-end lg:gap-32 gap-14">
                                        <div>
                                            <div className="flex flex-col gap-4 text-sm">
                                                <h5 className="mb-3">Resources</h5>
                                                <div className="text-gray-500/80"><a href="javascript:void(0);">Blog</a></div>
                                                <div className="text-gray-500/80"><a href="javascript:void(0);">FAQ</a></div>
                                                <div className="text-gray-500/80"><a href="javascript:void(0);">Team of service</a></div>
                                                <div className="text-gray-500/80"><a href="javascript:void(0);">Privacy policy</a></div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="flex flex-col gap-4 text-sm">
                                                <h5 className="mb-3">Company</h5>
                                                <div className="text-gray-500/80"><a href="javascript:void(0);">About</a></div>
                                                <div className="text-gray-500/80"><a href="javascript:void(0);">Contact Us</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="border-b"></div>

                        <div className="py-5">
                            <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6">

                                <div>
                                    <p className="text-gray-500/80 text-sm">
                                        <script>document.write(new Date().getFullYear())</script>© Prompt. All rights reserved. Crafted
                                        by <a href="#" className="text-gray-800 hover:text-primary transition-all">Coderthemes</a>
                                    </p>
                                </div>

                                <div className="flex justify-center sm:justify-end gap-7">
                                    <div>
                                        <a href="#">
                                            <svg className="w-5 h-5 text-gray-600 hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <svg className="w-5 h-5 text-gray-600 hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <svg className="w-5 h-5 text-gray-600 hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                <rect x="2" y="9" width="4" height="12"></rect>
                                                <circle cx="4" cy="4" r="2"></circle>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </footer>
                {/* <!-- =========== footer Section end =========== --> */}

                {/* <!-- =========== Back To Top Start =========== --> */}
                <button data-toggle="back-to-top" className="fixed text-sm rounded-full z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary/20 text-primary flex justify-center items-center">
                    <i className="fa-solid fa-arrow-up text-base"></i>
                </button>


            </div>

        </>
    )
}

export default Home