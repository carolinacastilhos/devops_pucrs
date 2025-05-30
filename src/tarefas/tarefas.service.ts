import { Injectable } from '@nestjs/common';
import { Tarefa } from './tarefa.entity';

@Injectable()
export class TarefasService {
  private tarefas: Tarefa[] = [];
  private contador = 1;

  criar(tarefa: Partial<Tarefa>): Tarefa {
    const novaTarefa: Tarefa = {
      id: this.contador++,
      titulo: tarefa.titulo,
      descricao: tarefa.descricao || '',
      concluida: false,
    };
    this.tarefas.push(novaTarefa);
    return novaTarefa;
  }

  listar(): Tarefa[] {
    return this.tarefas;
  }

  atualizar(id: number, dados: Partial<Tarefa>): Tarefa {
    const tarefa = this.tarefas.find((t) => t.id === id);
    if (!tarefa) throw new Error('Tarefa não encontrada');
    Object.assign(tarefa, dados);
    return tarefa;
  }

  remover(id: number): void {
    this.tarefas = this.tarefas.filter((t) => t.id !== id);
  }
}
