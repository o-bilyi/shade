import {connect} from "react-redux";
// import firebase from "firebase/app";
// import {firebaseAuth} from "services/database";
// import FirebaseList from "services/databaseList";

// export const updateUserMetaSuccess = (data, path) => {
// 	return {
// 		type : "UPDATE_USER_META_SUCCESS",
// 		data,
// 		path,
// 	};
// };
//
// export const signInSuccess = user => {
// 	return {
// 		type : "SIGN_IN_SUCCESS",
// 		data : user,
// 	};
// };
//
// export const userEntity = new FirebaseList({
// 	onChange : (data, path) => updateUserMetaSuccess(data, path),
// 	onChildAdd : () => ({
// 		type : "NULL",
// 	}),
// 	onChildChange : () => ({
// 		type : "NULL",
// 	}),
// });
//
//
// const getUserId = (params) => {
// 	if (params.id && params.id !== "undefined") {
// 		return params.id;
// 	}
// 	if (params.uid && params.uid !== "undefined") {
// 		return params.uid;
// 	}
// 	throw new Error("user id not found");
// };
//
// const authenticate = provider => dispatch => {
// 	return firebaseAuth.signInWithPopup(provider).then(({user}) => {
// 		dispatch(signInSuccess(user));
// 		return user;
// 	}).then(user => {
// 		userEntity.path = `users/${getUserId(user)}`;
// 		return userEntity.getData();
// 	}).then(userMeta => {
// 		dispatch(updateUserMetaSuccess(userMeta));
// 		return userMeta;
// 	}).catch(e => {
// 		throw e;
// 	});
// };
//
// const signInWithGoogle = () => {
// 	const provider = new firebase.auth.GoogleAuthProvider();
// 	provider.addScope("https://www.googleapis.com/auth/userinfo.email");
// 	return authenticate(provider);
// };

import Login from "../Login.module";

const mapStateToProps = state => ({
	signIn : state.user.signIn,
});

const mapDispatchToProps = {
	// signInWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
