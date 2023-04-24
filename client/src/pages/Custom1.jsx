import { Web3Storage } from 'Web3Storage'

function Custom1() {
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFkODc0OTY3MEQwMDY1MzBiNzJGMzNjMTNlOTc2YjBkM2M4MEREYzkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODIyMTY3NjYwNDgsIm5hbWUiOiJIYWNrb2ZpZXN0YSJ9.hFTOPW5ppNDfw3tQt9s_K5fOb5mLlJQYDYyfasNnu6M';
    const client = new Web3Storage({ token: process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFkODc0OTY3MEQwMDY1MzBiNzJGMzNjMTNlOTc2YjBkM2M4MEREYzkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODIyMTY3NjYwNDgsIm5hbWUiOiJIYWNrb2ZpZXN0YSJ9.hFTOPW5ppNDfw3tQt9s_K5fOb5mLlJQYDYyfasNnu6M });

    const loginForm = document.querySelector('#submit-button');

    loginForm.addEventListener('click', async (e) => {
        e.preventDefault();
        const date = new Date();

        let currentDay = String(date.getDate()).padStart(2, '0');

        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");

        let currentYear = date.getFullYear();

        let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
        // Collect form data
        const formData = {
            firstname: document.querySelector('#fname').value,
            lastname: document.querySelector('#lname').value,
            amount: document.querySelector('#amt').value,
            date: currentDate,
        };

        // Create a new File object
        const file = new File([JSON.stringify(formData)], 'login.json', {
            type: 'application/json',
        });

        // Upload the file to web3.storage
        const cid = await client.put([file]);
        //   console.log(`Login form uploaded to web3.storage with CID: ${cid}`);
        let appear = document.getElementById('show')
        appear.innerHTML = `Your CID is: ${cid}`;
    });
    return (
        <>
            <form id="login-form">
                <h3>Submit Your Details</h3>

                <label for="fname">First Name</label>
                <input type="text" placeholder="First Name" id="fname" />

                <label for="lname">Last Name</label>
                <input type="text" placeholder="Last Name" id="lname" />
                <label for="amount">Amount Donated</label>
                <input type="text" name="amt" id="amt" placeholder="Amount" />
                <div className="con">
                    <button id="submit-button">Submit</button>
                    {/* <a href="" style="margin-left: 125px;">Already have an account</a>
                            <div className="social">
                                <div className="go" style="cursor: pointer;"><i className="fa fa-google" ></i> Google</div>
                                <div className="fb" style="cursor: pointer;"><i className="fa fa-facebook" ></i> Facebook</div>
                            </div> */}
                </div>
            </form>
            <div id="show" style="background-color: red; margin-top: 2px; border: 2px solid transparent black;"></div>
        </>
    )
}