# Calcolo del prezzo del biglietto del treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Buon lavoro!
<hr>

## Scompongo il problema
- 1 Prendo l'elemento dal DOM
- 2 Chiedo all'utente il km da percorrere
- 3 Chiediamo all'utente l'età
- 4 Calcolo il prezzo del biglietto
- 5 Controllo se l'utente ha diritto a uno sconto
- 6 Se l'utente ne ha diritto applico lo sconto
- 7 Trasformo il prezzo con solo 2 decimi
- 8 Inserisco il prezzo nella pagina