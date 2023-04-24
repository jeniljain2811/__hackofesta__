import { Web3Storage } from 'Web3Storage'

function Custom() {
    const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFkODc0OTY3MEQwMDY1MzBiNzJGMzNjMTNlOTc2YjBkM2M4MEREYzkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODIyMTY3NjYwNDgsIm5hbWUiOiJIYWNrb2ZpZXN0YSJ9.hFTOPW5ppNDfw3tQt9s_K5fOb5mLlJQYDYyfasNnu6M';
    const client = new Web3Storage({ token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFkODc0OTY3MEQwMDY1MzBiNzJGMzNjMTNlOTc2YjBkM2M4MEREYzkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODIyMTY3NjYwNDgsIm5hbWUiOiJIYWNrb2ZpZXN0YSJ9.hFTOPW5ppNDfw3tQt9s_K5fOb5mLlJQYDYyfasNnu6M });

    const retrieveBtn = document.querySelector('#retrieve');
    const information = document.querySelector('#contain');

    retrieveBtn.addEventListener('click', async () => {
        // Get the CID from the user
        //   const cid = prompt('Enter the CID to retrieve information:');

        // Retrieve the file from web3.storage
        const files = await client.get(cid);

        // Parse the file data
        const fileData = await files[0].text();
        const { amount, currentDate } = JSON.parse(fileData);

        // Display the data on the screen
        information.textContent = `You Paid: ${amount}, The Date was: ${currentDate}`;
    });
    return (
        <article className="l-design-widht">
            <div className="card">
                {/* <svg className="icon" aria-hidden="true">
           <use xlink:href="#icon-coffee" href="#icon-coffee" />
        </svg> */}
                <label className="input">
                    <input className="input__field" type="text" placeholder=" " />
                    <span className="input__label">Enter Your CID</span>
                </label>
                <div className="button-group">
                    <button style="cursor: pointer;" id="retrieve">Retrieve</button>
                    {/* <button type="reset" style="cursor: pointer;">Reset</button> */}
                </div>
            </div>
            <div id="contain"></div>
        </article>
    )
}