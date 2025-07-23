export const createInputRow = (label, value, type = 'text') => {
    return `
        <div style="width: 100%; display: flex; gap: 1rem; margin-bottom: 1rem;">
            <label style="width: 20%; font-weight: 500;">${label}</label>
            <input style="flex: 1;" type="${type}" value="${value ?? ''}" />
        </div>
    `
}

export const createCheckboxRow = (label, checked) => {
    return `
        <div style="width: 100%; display: flex; gap: 1rem; margin-bottom: 1rem;">
            <label style="width: 20%; font-weight: 500;">${label}</label>
            <input type="checkbox" ${checked ? 'checked' : ''} />
        </div>
    `
}

export const createSelectRow = (label, value, options = []) => {
    const opts = options.map(opt => `<option value="${opt}" ${opt === value ? 'selected' : ''}>${opt}</option>`).join('')
    return `
        <div style="width: 100%; display: flex; gap: 1rem; margin-bottom: 1rem;">
            <label style="width: 20%; font-weight: 500;">${label}</label>
            <select style="flex: 1;">${opts}</select>
        </div>
    `
}

export const createParagraphRow = (label, value) => {
    return `
        <div style="width: 100%; display: flex; gap: 1rem; margin-bottom: 1rem;">
            <label style="width: 20%; font-weight: 500;">${label}</label>
            <h6 style="margin: 0; flex: 1;">${value ?? '-'}</h6>
        </div>
    `
}