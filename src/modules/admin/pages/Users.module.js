import React from "react";
import {db} from "../../../db";

export default class Users extends React.Component {
	componentDidMount() {
		this.getUsers();
		this.state = {
			users : []
		}
	}

	getUsers = () => {
		db.ref("/users").once("value").then(snapshot => {
			if (snapshot) {
				this.setState({
					users : snapshot.val()
				});
			}
		});
	};

	render() {
		console.warn(this.state.users)
		return (
			<div className="content">
				<h2 className="title-page">Team</h2>
				<div className="users">

					<form className="user-container" method="post" encType="multipart/form-data" action="/api/users">
						<div className="index">1</div>
						<div className="left-container">
							<div className="user-image-container">
								<div className="user-img" style="background-image:url(../uploads-image/1537424061405-ui-ux-designer.png)"/>
								<input className="download-user-img" type="file" required=""
											 autoComplete="off" value="1537424061405-ui-ux-designer.png" name="img" placeholder="user-img"/>
							</div>
							<div className="user-description-container">
								<div className="user-name-and-position">
									<div className="user-name"><label htmlFor="name">Name</label>
										<input id="name" type="text" name="name"
													 autoComplete="off" value="Serhii Henyk"/>
									</div>
									<div className="position"><label htmlFor="position">Position</label>
										<input id="position" type="text" name="position"
													 autoComplete="off" value="UI/UX designer"/>
									</div>
								</div>
								<div className="user-description"><label htmlFor="description">Description</label>
									<textarea className="user-description-textarea" id="description" name="description"
										autoComplete="off">Працюю дизайнером на протязі 4 років, за цей період покращив свої знання в UI/UX.</textarea>
								</div>
							</div>
						</div>
						<div className="right-container">
							<div className="social-links"><h5 className="title-links">Social links</h5>
								<div className="flex-container">
									<div className="facebook">
										<div className="icon"><i className="fa fa-facebook-f"/></div>
										<input className="social-input" type="text" name="facebook" autoComplete="off"
													 value="https://www.facebook.com/profile.php?id=100009468553076"/>
									</div>
									<div className="linkedin">
										<div className="icon"><i className="fa fa-linkedin"/></div>
										<input className="social-input" type="text" name="instagram" autoComplete="off"
													 value="https://www.linkedin.com/in/serhii-henyk-58b714151/"/>
									</div>
									<div className="behance">
										<div className="icon"><i className="fa fa-behance"/></div>
										<input className="social-input" type="text" name="behance" autoComplete="off" value=""/>
									</div>
									<div className="dribbble">
										<div className="icon"><i className="fa fa-dribbble"/></div>
										<input className="social-input" type="text" name="dribbble" autoComplete="off" value=""/>
									</div>
								</div>
							</div>
						</div>
						<div className="button-container">
							<button className="change-element" type="submit" data-method="delete" data-api="users" data-id="1537424061405"/>
							<button className="delete-element" type="button" data-method="delete" data-api="users" data-id="1537424061405"/>
						</div>
					</form>

				</div>
				<button className="add-user show-modal-form">add new</button>

				<div className="modal-form">
					<button className="close-modal show-modal-form">close</button>
					<form className="submit-form" method="post" encType="multipart/form-data" action="/api/users">
						<div className="flex-container">
							<div className="input-container"><input type="text" autoComplete="off" name="name" placeholder="name"/></div>
							<div className="input-container"><input type="text" autoComplete="off" name="position" placeholder="position"/></div>
							<div className="input-container"><input type="text" autoComplete="off" name="description" placeholder="description"/></div>
							<div className="input-container"><input type="text" autoComplete="off" name="facebook" placeholder="facebook"/></div>
							<div className="input-container"><input type="text" autoComplete="off" name="instagram" placeholder="instagram"/></div>
							<div className="input-container"><input type="text" autoComplete="off" name="behance" placeholder="behance"/></div>
							<div className="input-container"><input type="text" autoComplete="off" name="dribbble" placeholder="dribbble"/></div>
							<div className="input-container"><input type="file" autoComplete="off" name="img" placeholder="user-img"/></div>
						</div>
						<div className="button-container">
							<button className="show-modal-form" type="submit">Save</button>
							<button type="reset">Reset</button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}
