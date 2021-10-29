import React from "react"
import Brand from "./brand"
import Icon from "./common/icon"
import "../css/ui.css"

import { FrameCorners, Card, Text } from "@arwes/core"

const MenuIcons = [
	{ src: "/images/icons/globe.svg", label: "Info" },
	{ src: "/images/icons/person.svg", label: "Pg" },
	{ src: "/images/icons/group.svg", label: "Online" }
]

class UI extends React.Component {
	state = {
		mobileSelection: 0
	}

	toggleExpand = i => {
		this.setState({ mobileSelection: i === this.state.mobileSelection ? 0 : i })
	}

	render() {
		const { mobileSelection } = this.state
		return (
			<FrameCorners
				className={`ui ${mobileSelection > 0 ? "collapsible--expanded" : ""}`}>
				<section className="ui__container">
					<div className="collapsible__head ui__toggler">
						<div className="ui__head-menu">
							<div className="ui__head-menu-item">
								<Icon
									padding
									className="ui__head-icon"
									src="/images/icons/home.svg"
								/>
								Home
							</div>
							{MenuIcons.map((item, i) => (
								<div className="ui__head-menu-item">
									<Icon
										secondary={i + 1 === mobileSelection}
										onClick={() => this.toggleExpand(i + 1)}
										key={i}
										padding
										className="ui__head-icon"
										src={item.src}
									/>
									{item.label}
								</div>
							))}
						</div>
					</div>
					<div className="ui__content collapsible__content">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
						deleniti quaerat magnam voluptates reiciendis? Provident, minima
						quae corporis esse qui saepe maxime inventore labore, ab aliquam
						doloribus nesciunt recusandae natus! Ullam, impedit? Ipsam delectus
						doloribus in et sequi tempora molestias, iusto magnam. Molestias
						doloremque nobis, repellendus dolores consequuntur incidunt
						perferendis deleniti laboriosam sunt illum eius, labore harum
						commodi nemo maiores architecto quisquam dolore debitis. Fuga iusto
						ipsum voluptatibus debitis delectus repellendus eum maiores non
						voluptas suscipit tempora omnis, fugit perspiciatis dolorem,
						praesentium placeat ea et corrupti eligendi. Hic commodi, quaerat
						corporis sequi, a fugit ullam maxime dolor laudantium beatae labore
						inventore velit neque porro. Unde expedita reprehenderit praesentium
						molestias est, consequuntur magni porro sequi, iusto sed sit,
						consectetur blanditiis inventore quaerat vitae amet? Consectetur,
						harum velit eaque animi quas optio, vitae, iste mollitia tempora
						quam perferendis laborum porro hic ipsam esse. Magnam sint commodi
						minima sit, quos architecto? Totam vitae aspernatur amet, quos dicta
						distinctio aperiam commodi obcaecati error accusantium minima eos
						nobis molestiae magni. Assumenda impedit voluptatibus quidem? Hic
						recusandae expedita repellat quas sunt accusamus explicabo vel
						nostrum dolore inventore distinctio maiores mollitia, necessitatibus
						excepturi tenetur doloremque voluptates eius enim aliquam doloribus
						consequuntur ad voluptas praesentium. Est at alias veniam magnam
						quasi adipisci fuga porro iusto laborum provident aliquid
						cupiditate, facilis dolores necessitatibus, aut id quia veritatis
						voluptatem facere, soluta laudantium velit. Ipsam eligendi non id
						sint nemo voluptate laudantium ad iste tenetur ipsum! Voluptas, qui
						quia excepturi ab voluptate voluptatum alias expedita delectus amet
						molestiae dolor magnam quas inventore nobis! Atque aliquid corrupti
						exercitationem beatae deleniti voluptatem dolores recusandae vero
						perspiciatis, aperiam numquam, quo asperiores reiciendis modi illo
						odit similique non? Soluta dolorem magnam neque quaerat dicta
						consequatur minima consectetur molestias quam cum, fugit veniam
						delectus culpa molestiae dolor, quia atque hic magni sint laborum
						doloribus ad repellat. Reiciendis molestiae consequuntur, quos
						tempora, eveniet minima voluptatem excepturi accusamus repudiandae
						eaque consequatur itaque magni, et maiores minus ipsa ducimus nam
						iusto ex distinctio dignissimos? Rem commodi eius cumque quas.
						Voluptatem unde debitis optio pariatur iure, repellat quod aperiam
						fugiat porro eum, nemo iusto? Fugit distinctio voluptatem ratione
						beatae asperiores in quia reprehenderit, ad dolore laboriosam
						suscipit iusto perferendis qui sunt ullam quaerat obcaecati, labore
						laudantium nemo libero quis repellendus. Quibusdam minus quia, quasi
						consequuntur, vel, nisi ullam numquam molestiae ad optio tempora
						natus perspiciatis. Omnis, corporis. Modi quibusdam dolorum ipsam
						reprehenderit omnis voluptates ipsum consectetur impedit soluta
						asperiores adipisci, atque recusandae ab repellat aliquam vel
						tenetur? Obcaecati vel ipsam, vero cupiditate nesciunt nobis
						adipisci incidunt autem ipsum fuga dolores commodi labore ut nisi
						doloremque aperiam iure provident. Sit totam voluptas soluta earum
						iusto tempore voluptate delectus asperiores debitis nisi ullam odit
						velit aspernatur ea quis saepe vel distinctio unde, aperiam, quaerat
						doloribus? Commodi voluptatem dicta corporis autem, temporibus
						eligendi nulla! Cum delectus a, iure est itaque illum reiciendis
						porro quasi amet dicta ea neque aspernatur voluptates natus
						perferendis minus consequuntur odit doloribus excepturi numquam
						mollitia perspiciatis quos. Ratione amet tempora eos aliquid, culpa
						consectetur quibusdam. Voluptates provident quasi aperiam?
					</div>
				</section>
			</FrameCorners>
		)
	}
}

export default UI
