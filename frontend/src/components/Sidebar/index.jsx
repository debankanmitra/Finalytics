import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/logo.svg";

import PropTypes from "prop-types";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
	// const location = useLocation();
	// const { pathname } = location;

	const trigger = useRef(null);
	const sidebar = useRef(null);

	// const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
	// const [sidebarExpanded, setSidebarExpanded] = useState(
	//   storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
	// );

	// close on click outside
	useEffect(() => {
		const clickHandler = ({ target }) => {
			if (!sidebar.current || !trigger.current) return;
			if (
				!sidebarOpen ||
				sidebar.current.contains(target) ||
				trigger.current.contains(target)
			)
				return;
			setSidebarOpen(false);
		};
		document.addEventListener("click", clickHandler);
		return () => document.removeEventListener("click", clickHandler);
	});

	// close if the esc key is pressed
	useEffect(() => {
		const keyHandler = ({ keyCode }) => {
			if (!sidebarOpen || keyCode !== 27) return;
			setSidebarOpen(false);
		};
		document.addEventListener("keydown", keyHandler);
		return () => document.removeEventListener("keydown", keyHandler);
	});

	// useEffect(() => {
	//   localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
	//   if (sidebarExpanded) {
	//     document.querySelector('body')?.classList.add('sidebar-expanded');
	//   } else {
	//     document.querySelector('body')?.classList.remove('sidebar-expanded');
	//   }
	// }, [sidebarExpanded]);

	return (
		<aside
			ref={sidebar}
			className={`absolute left-0 top-0 z-9999 border border-stroke flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
				sidebarOpen ? "translate-x-0" : "-translate-x-full"
			}`}
		>
			{/* <!-- SIDEBAR HEADER --> */}
			<div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
				<NavLink to="/">
					<img src={Logo} alt="Logo" />
				</NavLink>

				<button
					ref={trigger}
					onClick={() => setSidebarOpen(!sidebarOpen)}
					aria-controls="sidebar"
					aria-expanded={sidebarOpen}
					className="block lg:hidden"
				>
					<svg
						className="fill-current"
						width="20"
						height="18"
						viewBox="0 0 20 18"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
							fill=""
						/>
					</svg>
				</button>
			</div>
			{/* <!-- SIDEBAR HEADER --> */}

			<div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
				<nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
					<div>
						<h3 className="mb-4 ml-4 text-lg font-semibold text-black">
							Bitcoin
						</h3>
						<h6 className="mb-3 ml-4 text-xl font-medium text-black">
							$67,893.00
							<span className="ml-3 text-xs font-bold text-meta-3">
								2.17% (1d)
							</span>
						</h6>

						<ul className="mb-6 flex flex-col gap-1.5">
							<button
								type="button"
								className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray text-gray-500"
							>
								<span>+</span>
								Add to Watchlist
							</button>

							<li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark2 duration-300 ease-in-out">
								<span>Market cap</span>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm font-semibold">
									$1.34T
								</span>
							</li>
							<li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark2 duration-300 ease-in-out">
								<span>Volume (24h)</span>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm font-semibold">
									$41.26B
								</span>
							</li>
							<li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark2 duration-300 ease-in-out">
								<span>Circulating supply</span>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm font-semibold">
									19.66M BTC
								</span>
							</li>
							<li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark2 duration-300 ease-in-out">
								<span>Total supply</span>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm font-semibold">
									19.66M BTC
								</span>
							</li>
							<li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark2 duration-300 ease-in-out">
								<span>Max. supply</span>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm font-semibold">
									19.66M BTC
								</span>
							</li>
						</ul>

						<h6 className="mb-3 ml-4 text-xl font-medium text-black">About</h6>
						<p className="ml-4 text-xs mb-2">
							Bitcoin is the world’s most traded cryptocurrency, and represents
							the largest piece of the crypto market pie. It was the first
							digital coin and as such, remains the most famous and
							widely-adopted cryptocurrency in the world. It is the original
							gangster in whose footsteps all other coins follow. The birth of
							Bitcoin was the genesis of an entirely new asset class, and a huge
							step away from traditional, centrally controlled money. Today,
							many advocates believe Bitcoin will facilitate the next stage for
							the global financial system, although this — of course — remains
							to be seen.
						</p>
						<ul className="mb-6 flex flex-col gap-1.5">
							<li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark2 duration-300 ease-in-out">
								<span>Category</span>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm font-semibold">
									Cryptocurrencies
								</span>
							</li>
							<li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark2 duration-300 ease-in-out">
								<span>Website</span>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm font-semibold">
									bitcoin.org
								</span>
							</li>
							<li className="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark2 duration-300 ease-in-out">
								<span>Community</span>
								<span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-sm font-semibold">
									Reddit
								</span>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</aside>
	);
};

Sidebar.propTypes = {
	sidebarOpen: PropTypes.bool.isRequired,
	setSidebarOpen: PropTypes.func.isRequired,
};

export default Sidebar;
