function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
    const structureProfileElement = document.querySelector('.profile');
    const mainContentElement = document.querySelector('#main');
    const structureProfileElementClone = structureProfileElement.cloneNode(true);

    document.addEventListener('DOMContentLoaded', () => {
        structureProfileElement.remove();
        getAllProfiles();
    });

    async function customFetch(url, options) {
        try {
            const data = await fetch(url, options).then((res) => {
                if (!res.ok) {
                    throw new Error(res.message);
                }
                return res.json();
            });
            return { data, error: null };
        } catch (error) {
            console.error(error);
            return { data: null, error };
        }
    }

    function showAdditionalData(profileElement, _id) {
        const { checked: isLocked } = profileElement.querySelector(`input[name="${_id}"]`);

        if (isLocked) {
            return;
        }

        const hiddenDataElement = profileElement.querySelector('.profile > div');
        const buttonElement = profileElement.querySelector('button');
        const isHidden = buttonElement.textContent === 'Show more';

        if (!isHidden) {
            hiddenDataElement.style.display = 'none';
            buttonElement.textContent = 'Show more';
        } else {
            hiddenDataElement.style.display = 'block';
            buttonElement.textContent = 'Hide it';
        }

    }

    function appendProfiles(profiles) {
        profiles.forEach(({ username, email, age, _id }) => {
            const profileClone = structureProfileElementClone.cloneNode(true);

            profileClone.querySelector("input[name='user1Username']").value = username;
            profileClone.querySelector("input[name='user1Email']").value = email;
            profileClone.querySelector("input[name='user1Age']").value = age.toString();

            const [lockRadioElement, unlockRadioElement] = profileClone.querySelectorAll("input[name='user1Locked']");

            lockRadioElement.setAttribute('name', _id);
            unlockRadioElement.setAttribute('name', _id);

            profileClone.querySelector('.profile > div').style.display = 'none';

            mainContentElement.appendChild(profileClone);

            profileClone.querySelector('button').addEventListener('click', () => showAdditionalData(profileClone, _id));
        });
    }

    async function getAllProfiles() {
        const { data, error } = await customFetch(baseUrl);

        if (error) {
            return;
        }

        appendProfiles(Object.values(data));
    }
}