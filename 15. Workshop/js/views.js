import { isAuthenticated, login, logout } from './authService.js';
import { redirect } from './router-utils.js';
import { getAll, create, getOne } from './solutionService.js';

export function renderHome() {
    const homeElement = document.getElementById('home');
    homeElement.style.display = 'block';
}

export async function renderSolutions() {
    const solutionsSection = document.getElementById('solutions');
    solutionsSection.style.display = 'block';

    // clear solutions
    const headerElement = solutionsSection.children[0];
    solutionsSection.textContent = '';
    solutionsSection.appendChild(headerElement); 

    // fetch solutioons
    const solutions = await getAll();

    if (solutions.length < 1) {
        const h2Element = document.createElement('h2');
        h2Element.setAttribute('id', 'no-solution');
        h2Element.textContent = 'No Solutions Added.'

        solutionsSection.appendChild(h2Element);

        return;
    }

    // create elements
    const solutionElements = solutions.map((solution) => createSolution(solution));
    
    // attach to dom
    solutionsSection.append(...solutionElements);
}

function createSolution({ 
    _id, 
    _ownerId,
    type, 
    imageUrl, 
    description,
    learnMore,
    _createdOn 
}) {
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    const h3Element = document.createElement('h3');
    h3Element.classList.add('type');
    h3Element.textContent = type;
    
    const pElement = document.createElement('p');
    pElement.classList.add('description');
    pElement.textContent = description;

    const aElement = document.createElement('a');
    aElement.classList.add('details-btn');
    aElement.href = `/solutions/${_id}/details`;
    aElement.textContent = 'Learn More';

    const infoElement = document.createElement('div');
    infoElement.classList.add('solution-info');
    infoElement.appendChild(h3Element);
    infoElement.appendChild(pElement);
    infoElement.appendChild(aElement);

    const solutionElement = document.createElement('div');
    solutionElement.classList.add('solution');
    solutionElement.appendChild(imgElement);
    solutionElement.appendChild(infoElement);
    
    return solutionElement;
}

export function renderRegister() {
    const registerElement = document.getElementById('register');
    registerElement.style.display = 'block';
}

export function renderLogin() {
    const loginElement = document.getElementById('login');
    loginElement.style.display = 'block';
    
    const formElement = loginElement.querySelector('.login-form');
    
    formElement.addEventListener('submit', loginHandler);
    
    async function loginHandler(e) {
        // Stop refresh on submit
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(e.currentTarget);
        
        //Sent login http request
        const email = formData.get('email');
        const password = formData.get('password');
        
        await login(email, password);
        
        redirect('/');
    }
}

export function renderCreate() {
    const createSection = document.getElementById('create');
    createSection.style.display = 'block';

    const formElement = createSection.querySelector('.create-form');

    formElement.addEventListener('submit', createHandler);

    async function createHandler(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const type = formData.get('type');
        const imageUrl = formData.get('image-url');
        const description = formData.get('description');
        const learnMore = formData.get('more-info');

        // TODO: Error handling
        await create(type, imageUrl, description, learnMore);

        // clear inputs
        e.currentTarget.reset();
        
        redirect('/solutions');
    }
}

export function renderEdit() {
    const editElement = document.getElementById('edit');
    editElement.style.display = 'block';
} 

export async function renderDetails(params) {
    const detailsSection = document.getElementById('details');
    detailsSection.style.display = 'block';

    const solution = await getOne(params.solutionId);

    const imgElement = detailsSection.querySelector('#details-img');
    imgElement.src = solution.imageUrl;
    
    const typeElement = detailsSection.querySelector('#details-type');
    typeElement.textContent = solution.type;
    
    const descriptionElement = detailsSection.querySelector('#description');
    descriptionElement.textContent = solution.description;

    const infoElement = detailsSection.querySelector('#more-info');
    infoElement.textContent = solution.learnMore;

}

export async function renderLogout() {
    // TODO: remove user sesion
    await logout();
    // TODO: redirect to home
    redirect('/');
} 

export function renderHeader() {
    const headerElement = document.querySelector('#wrapper > header');
    const userNavigation = headerElement.querySelector('.user');
    const guestNavigation = headerElement.querySelector('.guest');

    if (isAuthenticated()) {
        guestNavigation.style.display = 'none';
        userNavigation.style.display = '';    
    } else {
        guestNavigation.style.display = '';
        userNavigation.style.display = 'none';
    }
}
