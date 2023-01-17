using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface ILotePersist
    {
        /// <summary>
        /// Método get que retornará uma lista de lotes por eventoId.
        /// </summary>
        /// <param name="eventoId"></param>
        /// <returns>Array de Lotes</returns>
        Task<Lote[]> GetLotesByEventoIdAsync(int eventoId);
        /// <summary>
        /// Método get que retorna apenas 1 Lote.
        /// </summary>
        /// <param name="eventoId">Código chave da tabela evento</param>
        /// <param name="id"></param>
        /// <returns>Apenas um Lote</returns>
        Task<Lote> GetLoteByIdAsync(int eventoId, int id);                
    }
}