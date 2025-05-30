import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TarefasService } from './tarefas.service';
import { Tarefa } from './tarefa.entity';

@Controller('tarefas')
export class TarefasController {
  constructor(private readonly tarefasService: TarefasService) {}

  @Post()
  criar(@Body() tarefa: Partial<Tarefa>): Tarefa {
    return this.tarefasService.criar(tarefa);
  }

  @Get()
  listar(): Tarefa[] {
    return this.tarefasService.listar();
  }

  @Put(':id')
  atualizar(@Param('id') id: string, @Body() tarefa: Partial<Tarefa>): Tarefa {
    return this.tarefasService.atualizar(Number(id), tarefa);
  }

  @Delete(':id')
  remover(@Param('id') id: string): void {
    return this.tarefasService.remover(Number(id));
  }
}
