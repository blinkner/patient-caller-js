document.getElementById('adicionar_paciente').addEventListener('click', () => {
    const input_paciente = document.getElementById('paciente');

    if (input_paciente.value != '') {
        const linha = document.createElement('tr');

        const td_nome = document.createElement('td');
        td_nome.innerText = input_paciente.value;

        const td_local = document.createElement('td');
        const select_local = document.createElement('select');

        td_local.appendChild(select_local);

        select_local.addEventListener('focus', () => {
            select_local.innerHTML = '';
            
            let locais = document.querySelectorAll('.nome-local');
            for (let i = 0; i < locais.length; i++) {
                const opt = document.createElement('option');
                opt.innerText = locais[i].innerText;

                select_local.appendChild(opt);
            }
        });

        const td_chamar = document.createElement('td');
        const btn_chamar = document.createElement('button');
        btn_chamar.type = 'button';
        btn_chamar.classList.add('btn-chamar');
        btn_chamar.innerText = 'Chamar';

        btn_chamar.addEventListener('click', () => {
            const paciente = td_nome.innerText;
            bc.postMessage(`{"nome": "${paciente}", "local": "${select_local.value}"}`);
        });

        td_chamar.appendChild(btn_chamar);

        const td_excluir = document.createElement('td');
        const btn_excluir = document.createElement('button');
        btn_excluir.type = 'button';
        btn_excluir.classList.add('btn-excluir');
        btn_excluir.innerText = 'Excluir';

        btn_excluir.addEventListener('click', () => {
            if (confirm("Deseja realmente excluir esse paciente?")) {
                btn_excluir.parentElement.parentElement.parentElement.removeChild(btn_excluir.parentElement.parentElement);
            }
        });
        td_excluir.appendChild(btn_excluir);

        linha.appendChild(td_nome);
        linha.appendChild(td_local);
        linha.appendChild(td_chamar);
        linha.appendChild(td_excluir);

        const corpo_tabela_pacientes = document.getElementById('corpo-tabela-pacientes');
        corpo_tabela_pacientes.appendChild(linha);

        input_paciente.value = '';
    }
});

document.getElementById('adicionar-local').addEventListener('click', () => {
    const input_local = document.getElementById('local');

    if (input_local.value != '') {
        const linha = document.createElement('tr');

        const td_nome = document.createElement('td');
        td_nome.classList.add('nome-local');
        td_nome.innerText = input_local.value;

        const td_excluir = document.createElement('td');
        const btn_excluir = document.createElement('button');
        btn_excluir.type = 'button';
        btn_excluir.innerText = 'Excluir';

        btn_excluir.addEventListener('click', () => {
            if (confirm("Deseja realmente excluir esse local?")) {
                btn_excluir.parentElement.parentElement.parentElement.removeChild(btn_excluir.parentElement.parentElement);
            }
        });

        td_excluir.appendChild(btn_excluir);

        linha.appendChild(td_nome);
        linha.appendChild(td_excluir);

        const corpo_tabela_locais = document.getElementById('corpo-tabela-locais');
        corpo_tabela_locais.appendChild(linha);

        input_local.value = '';
    }
});

document.getElementById('btn-chamador').addEventListener('click', () => {
    window.open('caller.html', '_blank');
});

const bc = new BroadcastChannel('canalChamador');