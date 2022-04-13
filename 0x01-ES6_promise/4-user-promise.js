/* returns a resolved promise with this object */
export default function signUpUser(firstName, lastName) {
    return Promise.resolve( {firstName, lastName} );
}
