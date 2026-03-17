import { useEffect, useRef } from "react";
import { teamMembers } from "../data/team";

const extractGoogleDriveId = (url = "") => {
	const idParamMatch = url.match(/[?&]id=([^&]+)/);
	if (idParamMatch?.[1]) return idParamMatch[1];

	const pathMatch = url.match(/\/d\/([^/]+)/);
	if (pathMatch?.[1]) return pathMatch[1];

	return null;
};

const getRenderableImageUrl = (url = "") => {
	const driveId = extractGoogleDriveId(url);
	if (driveId) {
		// Google Drive thumbnail endpoint is more reliable for <img> rendering than shared links.
		return `https://drive.google.com/thumbnail?id=${driveId}&sz=w1200`;
	}
	return url;
};

const getAvatarFallback = (name = "Team Member") =>
	`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=f94771&color=ffffff&size=512`;

const Team = () => {
	const headerRef = useRef(null);
	const cardsRef = useRef([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("team-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);

		if (headerRef.current) observer.observe(headerRef.current);
		cardsRef.current.forEach((card) => {
			if (card) observer.observe(card);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<section className="py-4 sm:py-6 lg:py-8 bg-light min-h-[calc(100vh-64px)]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div ref={headerRef} className="team-header text-center max-w-3xl mx-auto mb-8 sm:mb-10">
					<p className="font-body text-sm uppercase tracking-[0.2em] font-semibold mb-4 text-primary">
						Soul N Psyche Experts
					</p>
					<h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-dark leading-tight mb-5">
						Meet The Team
					</h2>
				</div>

				<div className="flex flex-col gap-5 sm:gap-6">
					{teamMembers.map((member, i) => (
						<article
							key={member.name}
							ref={(el) => (cardsRef.current[i] = el)}
							className="team-card group relative rounded-3xl border border-gray-100 bg-white p-5 sm:p-6 lg:p-7 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
							style={{ "--delay": `${i * 100}ms` }}
						>
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
								style={{
									background:
										"radial-gradient(1200px circle at -10% -20%, rgba(249, 71, 113, 0.1), transparent 42%), radial-gradient(800px circle at 110% 120%, rgba(255, 107, 53, 0.12), transparent 40%)",
								}}
							/>

							<div className="relative flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
								<div className="w-56 sm:w-44 lg:w-48 xl:w-52 aspect-[2/3] rounded-2xl overflow-hidden bg-white border border-gray-100 flex-shrink-0 flex items-center justify-center mx-auto sm:mx-0">
									<img
										src={getRenderableImageUrl(member.image)}
										alt={member.name}
										className="w-full h-full object-contain"
										loading="lazy"
										onError={(e) => {
											if (e.currentTarget.dataset.fallback === "1") return;
											e.currentTarget.dataset.fallback = "1";
											e.currentTarget.src = getAvatarFallback(member.name);
										}}
									/>
								</div>

								<div className="flex-1 min-w-0 my-auto">
									<h3 className="font-heading text-2xl sm:text-3xl text-dark leading-tight mb-2">
										{member.name}
									</h3>
									<p className="font-body text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-primary mb-4">
										{member.designation}
									</p>
									<p className="font-body text-sm sm:text-[15px] text-dark/65 leading-relaxed mb-5">
										{member.story}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>

			<style>{`
				.team-header {
					opacity: 0;
					transform: translateY(24px);
					transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1);
				}
				.team-header.team-visible {
					opacity: 1;
					transform: translateY(0);
				}
				.team-card {
					opacity: 0;
					transform: translateY(34px) scale(0.97);
					transition:
						opacity 0.65s cubic-bezier(.22,1,.36,1) var(--delay, 0ms),
						transform 0.65s cubic-bezier(.22,1,.36,1) var(--delay, 0ms),
						box-shadow 0.35s ease,
						border-color 0.35s ease;
				}
				.team-card.team-visible {
					opacity: 1;
					transform: translateY(0) scale(1);
				}
				.team-card:hover {
					border-color: rgba(249, 71, 113, 0.3);
				}
			`}</style>
		</section>
	);
};

export default Team;
