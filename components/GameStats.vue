<template>
  <v-layout row wrap>
    <!--<v-flex xs12>Stats For {{ game }}</v-flex>-->
    <v-flex xs12 v-if="game == 'PLAYERUNKNOWN\'S BATTLEGROUNDS'">
      <v-tabs color="purple darken-3" dark slider-color="white" grow v-if="TotalKills">
        <v-tab ripple key="overall">Overall</v-tab>
        <v-tab ripple key="fppSquad">First Person Squad</v-tab>
        <v-tab ripple key="fppDuo">First Person Duos</v-tab>
        <v-tab ripple key="fppSolo">First Person Solo</v-tab>
        <v-tab ripple key="tppSquad">Third Person Squad</v-tab>
        <v-tab ripple key="tppDuo">Third Person Duos</v-tab>
        <v-tab ripple key="tppSolo">Third Person Solo</v-tab>
        <v-tab-item key="overall">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>Career Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line v-if="uid">
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item key="fppSquad">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>First Person Squad Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item key="fppDuo">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>First Person Duo Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item key="fppSolo">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>First Person Solo Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item key="tppSquad">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>Third Person Squad Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSquadTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSquadTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSquadTotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSquadTotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSquadTotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item key="tppDuo">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>Third Person Duo Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPDuoTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPDuoTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPDuoTotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPDuoTotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPDuoTotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item key="tppSolo">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>Third Person Solo Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSoloTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSoloTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSoloTotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSoloTotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TPPSoloTotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </v-flex>
    <!--<v-flex xs12 v-if="game == 'Tom Clancy\'s Rainbow Six: Siege'">
      <v-tabs color="purple darken-3" dark slider-color="white" grow>
        <v-tab ripple key="overall">Overall</v-tab>
        <v-tab-item key="overall">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>Career Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </v-flex>-->
    <v-flex xs12 v-if="game == 'Apex Legends'">
      <v-tabs color="purple darken-3" dark slider-color="white" grow v-if="Level">
        <v-tab ripple key="overall">Overall</v-tab>
        <v-tab-item key="overall">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>Career Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Level</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ Level }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 md3 mb-5 pa-3>
                      <h3>Bangalore</h3>
                      <v-list-tile-title>Total Kills: {{ BangKills }}</v-list-tile-title>
                      <v-list-tile-title>Total Damage: {{ BangDamage }}</v-list-tile-title>
                      <v-list-tile-title>Total Headshots: {{ BangHeadshots }}</v-list-tile-title>
                      <v-list-tile-title>Total Matches: {{ BangMatches }}</v-list-tile-title>
                    </v-flex>
                    <v-flex xs12 md3 mb-5 pa-3>
                      <h3>Bloodhound</h3>
                      <v-list-tile-title>Total Kills: {{ BloodKills }}</v-list-tile-title>
                      <v-list-tile-title>Total Damage: {{ BloodDamage }}</v-list-tile-title>
                      <v-list-tile-title>Total Headshots: {{ BloodHeadshots }}</v-list-tile-title>
                      <v-list-tile-title>Total Matches: {{ BloodMatches }}</v-list-tile-title>
                    </v-flex>
                    <v-flex xs12 md3 mb-5 pa-3>
                      <h3>Caustic</h3>
                      <v-list-tile-title>Total Kills: {{ CausKills }}</v-list-tile-title>
                      <v-list-tile-title>Total Damage: {{ CausDamage }}</v-list-tile-title>
                      <v-list-tile-title>Total Headshots: {{ CausHeadshots }}</v-list-tile-title>
                      <v-list-tile-title>Total Matches: {{ CausMatches }}</v-list-tile-title>
                    </v-flex>
                    <v-flex xs12 md3 mb-5 pa-3>
                      <h3>Gibraltar</h3>
                      <v-list-tile-title>Total Kills: {{ GibKills }}</v-list-tile-title>
                      <v-list-tile-title>Total Damage: {{ GibDamage }}</v-list-tile-title>
                      <v-list-tile-title>Total Headshots: {{ GibHeadshots }}</v-list-tile-title>
                      <v-list-tile-title>Total Matches: {{ GibMatches }}</v-list-tile-title>
                    </v-flex>
                    <v-flex xs12 md3 mb-5 pa-3>
                      <h3>Lifeline</h3>
                      <v-list-tile-title>Total Kills: {{ LifeKills }}</v-list-tile-title>
                      <v-list-tile-title>Total Damage: {{ LifeDamage }}</v-list-tile-title>
                      <v-list-tile-title>Total Headshots: {{ LifeHeadshots }}</v-list-tile-title>
                      <v-list-tile-title>Total Matches: {{ LifeMatches }}</v-list-tile-title>
                    </v-flex>
                    <v-flex xs12 md3 mb-5 pa-3>
                      <h3>Mirage</h3>
                      <v-list-tile-title>Total Kills: {{ MirageKills }}</v-list-tile-title>
                      <v-list-tile-title>Total Damage: {{ MirageDamage }}</v-list-tile-title>
                      <v-list-tile-title>Total Headshots: {{ MirageHeadshots }}</v-list-tile-title>
                      <v-list-tile-title>Total Matches: {{ MirageMatches }}</v-list-tile-title>
                    </v-flex>
                    <v-flex xs12 md3 mb-5 pa-3>
                      <h3>Pathfinder</h3>
                      <v-list-tile-title>Total Kills: {{ PathKills }}</v-list-tile-title>
                      <v-list-tile-title>Total Damage: {{ PathDamage }}</v-list-tile-title>
                      <v-list-tile-title>Total Headshots: {{ PathHeadshots }}</v-list-tile-title>
                      <v-list-tile-title>Total Matches: {{ PathMatches }}</v-list-tile-title>
                    </v-flex>
                    <v-flex xs12 md3 mb-5 pa-3>
                      <h3>Wraith</h3>
                      <v-list-tile-title>Total Kills: {{ WraithKills }}</v-list-tile-title>
                      <v-list-tile-title>Total Damage: {{ WraithDamage }}</v-list-tile-title>
                      <v-list-tile-title>Total Headshots: {{ WraithHeadshots }}</v-list-tile-title>
                      <v-list-tile-title>Total Matches: {{ WraithMatches }}</v-list-tile-title>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
      </v-tabs>
    </v-flex>
    <v-flex xs12 v-if="game == 'Fortnite'">
      <v-tabs color="purple darken-3" dark slider-color="white" grow v-if="TotalKills">
        <v-tab ripple key="overall">Overall</v-tab>
        <!--<v-tab ripple key="Squad">First Person Squad</v-tab>
        <v-tab ripple key="Duo">First Person Duos</v-tab>
        <v-tab ripple key="Solo">First Person Solo</v-tab>-->
        <v-tab-item key="overall">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>Career Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line v-if="uid">
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ TotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Matches Played</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ matchesPlayed }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>Keyboard Career Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line v-if="uid">
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ KBTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ KBTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Matches Played</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ KBmatchesPlayed }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>Gamepad Career Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line v-if="uid">
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ GPTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ GPTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Matches Played</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ GPmatchesPlayed }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <!--<v-tab-item key="Squad">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>First Person Squad Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSquadTotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item key="Duo">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>First Person Duo Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPDuoTotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>
        <v-tab-item key="Solo">
          <v-layout row>
            <v-flex xs12>
              <v-card>
                <v-toolbar color="purple darken-1" dark>
                  <v-toolbar-title>First Person Solo Stats</v-toolbar-title>
                </v-toolbar>
                <v-list two-line>
                  <v-layout row>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Kills</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalKills }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Wins</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalWins }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Assists</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalAssist }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Losses</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalLoss }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                    <v-flex xs12 md3>
                      <v-list-tile>
                      <v-list-tile-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-content>
                        <v-list-tile-title class="text-xs-center">Total Knocks</v-list-tile-title>
                        <v-list-tile-sub-title class="text-xs-center">{{ FPPSoloTotalKnock }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    </v-flex>
                  </v-layout>
                </v-list>
              </v-card>
            </v-flex>
          </v-layout>
        </v-tab-item>-->
      </v-tabs>
    </v-flex>
  </v-layout>
</template>
<script>
  import axios from 'axios'
  export default {
    props: ['gameTitle', 'apexPF', 'apexUN', 'pubgPF', 'pubgUN', 'fortniteUN'],
    data: function () {
      return {
        game: this.gameTitle,
        user: '',
        uid: null,
        lastMatch: null,
        TotalKills: null,
        TotalWins: null,
        TotalAssist: null,
        TotalLoss: null,
        // PLAYERUNKNOWN'S BATTLEGROUNDS SPECIFIC
        TotalKnock: null,
        FPPSquadTotalKills: null,
        FPPSquadTotalWins: null,
        FPPSquadTotalAssist: null,
        FPPSquadTotalLoss: null,
        FPPSquadTotalKnock: null,
        FPPDuoTotalKills: null,
        FPPDuoTotalWins: null,
        FPPDuoTotalAssist: null,
        FPPDuoTotalLoss: null,
        FPPDuoTotalKnock: null,
        FPPSoloTotalKills: null,
        FPPSoloTotalWins: null,
        FPPSoloTotalAssist: null,
        FPPSoloTotalLoss: null,
        FPPSoloTotalKnock: null,
        TPPSquadTotalKills: null,
        TPPSquadTotalWins: null,
        TPPSquadTotalAssist: null,
        TPPSquadTotalLoss: null,
        TPPSquadTotalKnock: null,
        TPPDuoTotalKills: null,
        TPPDuoTotalWins: null,
        TPPDuoTotalAssist: null,
        TPPDuoTotalLoss: null,
        TPPDuoTotalKnock: null,
        TPPSoloTotalKills: null,
        TPPSoloTotalWins: null,
        TPPSoloTotalAssist: null,
        TPPSoloTotalLoss: null,
        TPPSoloTotalKnock: null,
        r6: [],
        // APEX LEGENDS SPECIFIC
        Level: null,
        BangKills: null,
        BangDamage: null,
        BangHeadshots: null,
        BangMatches: null,
        BloodKills: null,
        BloodDamage: null,
        BloodHeadshots: null,
        BloodMatches: null,
        CausKills: null,
        CausDamage: null,
        CausHeadshots: null,
        CausMatches: null,
        GibKills: null,
        GibDamage: null,
        GibHeadshots: null,
        GibMatches: null,
        LifeKills: null,
        LifeDamage: null,
        LifeHeadshots: null,
        LifeMatches: null,
        MirageKills: null,
        MirageDamage: null,
        MirageHeadshots: null,
        MirageMatches: null,
        PathKills: null,
        PathDamage: null,
        PathHeadshots: null,
        PathMatches: null,
        WraithKills: null,
        WraithDamage: null,
        WraithHeadshots: null,
        WraithMatches: null,
        // FORTNITE SPECIFIC
        matchesPlayed: null,
        KBTotalKills: null,
        KBTotalWins: null,
        KBmatchesPlayed: null,
        GPTotalKills: null,
        GPTotalWins: null,
        GPmatchesPlayed: null,
        empty: ''
      }
    },
    created () {
      if (this.game === "PLAYERUNKNOWN'S BATTLEGROUNDS") {
        axios.get('https://api.pubg.com/shards/steam/players?filter[playerNames]=' + this.pubgUN, { 'headers': { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwNzc5Y2E0MC0zYzM4LTAxMzYtZTRkYy0zMzhmNTlhNzhmNzkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI2NTg2MDA4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im11bHRpLWdhbWUtZGFzaGJvYXJkIn0.SGv45sJPltP4RqMNBe9dFQoKuRHg5ITFr8BpA8Q2RUs', 'Accept': 'application/vnd.api+json' } })
          .then(response => {
            console.log(JSON.stringify(response, null, 2))
            this.uid = response.data.data[0].id
            this.lastMatch = response.data.data[0].relationships.matches.data[0].id
            axios.get('https://api.pubg.com/shards/steam/players/' + this.uid + '/seasons/lifetime', { 'headers': { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwNzc5Y2E0MC0zYzM4LTAxMzYtZTRkYy0zMzhmNTlhNzhmNzkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI2NTg2MDA4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im11bHRpLWdhbWUtZGFzaGJvYXJkIn0.SGv45sJPltP4RqMNBe9dFQoKuRHg5ITFr8BpA8Q2RUs', 'Accept': 'application/vnd.api+json' } })
              .then(res => {
                console.log(JSON.stringify(res, null, 2))
                var duo = res.data.data.attributes.gameModeStats['duo']
                var duoFPP = res.data.data.attributes.gameModeStats['duo-fpp']
                var solo = res.data.data.attributes.gameModeStats['solo']
                var soloFPP = res.data.data.attributes.gameModeStats['solo-fpp']
                var squad = res.data.data.attributes.gameModeStats['squad']
                var squadFPP = res.data.data.attributes.gameModeStats['squad-fpp']
                // Carrer Stats
                this.TotalKills = squadFPP.kills + squad.kills + soloFPP.kills + solo.kills + duoFPP.kills + duo.kills
                this.TotalWins = squadFPP.wins + squad.wins + soloFPP.wins + solo.wins + duoFPP.wins + duo.wins
                this.TotalAssist = squadFPP.assists + squad.assists + soloFPP.assists + solo.assists + duoFPP.assists + duo.assists
                this.TotalLoss = squadFPP.losses + squad.losses + soloFPP.losses + solo.losses + duoFPP.losses + duo.losses
                this.TotalKnock = squadFPP.dBNOs + squad.dBNOs + soloFPP.dBNOs + solo.dBNOs + duoFPP.dBNOs + duo.dBNOs
                // First Person Squad Stats
                this.FPPSquadTotalKills = squadFPP.kills
                this.FPPSquadTotalWins = squadFPP.wins
                this.FPPSquadTotalAssist = squadFPP.assists
                this.FPPSquadTotalLoss = squadFPP.losses
                this.FPPSquadTotalKnock = squadFPP.dBNOs
                // First Person Duo Stats
                this.FPPDuoTotalKills = duoFPP.kills
                this.FPPDuoTotalWins = duoFPP.wins
                this.FPPDuoTotalAssist = duoFPP.assists
                this.FPPDuoTotalLoss = duoFPP.losses
                this.FPPDuoTotalKnock = duoFPP.dBNOs
                // First Person Solo Stats
                this.FPPSoloTotalKills = soloFPP.kills
                this.FPPSoloTotalWins = soloFPP.wins
                this.FPPSoloTotalAssist = soloFPP.assists
                this.FPPSoloTotalLoss = soloFPP.losses
                this.FPPSoloTotalKnock = soloFPP.dBNOs
                // Third Person Squad Stats
                this.TPPSquadTotalKills = squad.kills
                this.TPPSquadTotalWins = squad.wins
                this.TPPSquadTotalAssist = squad.assists
                this.TPPSquadTotalLoss = squad.losses
                this.TPPSquadTotalKnock = squad.dBNOs
                // Third Person Duo Stats
                this.TPPDuoTotalKills = duo.kills
                this.TPPDuoTotalWins = duo.wins
                this.TPPDuoTotalAssist = duo.assists
                this.TPPDuoTotalLoss = duo.losses
                this.TPPDuoTotalKnock = duo.dBNOs
                // Third Person Solo Stats
                this.TPPSoloTotalKills = solo.kills
                this.TPPSoloTotalWins = solo.wins
                this.TPPSoloTotalAssist = solo.assists
                this.TPPSoloTotalLoss = solo.losses
                this.TPPSoloTotalKnock = solo.dBNOs
              })
            axios.get('https://api.pubg.com/shards/' + this.pubgPF + '/matches/' + this.lastMatch, { 'headers': { 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIwNzc5Y2E0MC0zYzM4LTAxMzYtZTRkYy0zMzhmNTlhNzhmNzkiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTI2NTg2MDA4LCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6Im11bHRpLWdhbWUtZGFzaGJvYXJkIn0.SGv45sJPltP4RqMNBe9dFQoKuRHg5ITFr8BpA8Q2RUs', 'Accept': 'application/vnd.api+json' } })
              .then(res => {
                console.log(JSON.stringify(res, null, 2))
              })
          })
      }
      /* if (this.game === "Tom Clancy's Rainbow Six: Siege") {
        axios.get('https://r6tab.com/api/search.php?platform=uplay&searchTylegn')
          .then(response => {
            console.log(response)
          })
      } */
      if (this.game === 'Apex Legends') {
        axios.get('https://apextab.com/api/search.php?platform=' + this.apexPF + '&search=' + this.apexUN)
          .then(response => {
            // console.log(response)
            this.uid = response.data.results[0].aid
            axios.get(' https://apextab.com/api/player.php?aid=' + this.uid)
              .then(res => {
                // console.log(res)
                var data = res.data
                this.TotalKills = data.kills
                this.Level = data.level
                // Character Data
                this.BangKills = data.kills_Bangalore
                this.BangDamage = data.damage_Bangalore
                this.BangHeadshots = data.headshots_Bangalore
                this.BangMatches = data.matches_Bangalore
                this.BloodKills = data.kills_Bloodhound
                this.BloodDamage = data.damage_Bloodhound
                this.BloodHeadshots = data.headshots_Bloodhound
                this.BloodMatches = data.matches_Bloodhound
                this.CausKills = data.kills_Caustic
                this.CausDamage = data.damage_Caustic
                this.CausHeadshots = data.headshots_Caustic
                this.CausMatches = data.matches_Caustic
                this.GibKills = data.kills_Gibraltar
                this.GibDamage = data.damage_Gibraltar
                this.GibHeadshots = data.headshots_Gibraltar
                this.GibMatches = data.matches_Gibraltar
                this.LifeKills = data.kills_Lifeline
                this.LifeDamage = data.damage_Lifeline
                this.LifeHeadshots = data.headshots_Lifeline
                this.LifeMatches = data.matches_Lifeline
                this.MirageKills = data.kills_Mirage
                this.MirageDamage = data.damage_Mirage
                this.MirageHeadshots = data.headshots_Mirage
                this.MirageMatches = data.matches_Mirage
                this.PathKills = data.kills_Pathfinder
                this.PathDamage = data.damage_Pathfinder
                this.PathHeadshots = data.headshots_Pathfinder
                this.PathMatches = data.matches_Pathfinder
                this.WraithKills = data.kills_Wraith
                this.WraithDamage = data.damage_Wraith
                this.WraithHeadshots = data.headshots_Wraith
                this.WraithMatches = data.matches_Wraith
                // console.log(data)
              })
          })
      }
      if (this.game === 'Fortnite') {
        axios.get('https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=' + this.fortniteUN)
          .then(response => {
            // console.log(response)
            this.uid = response.data.uid
            axios.get('https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats_v2?user_id=' + this.uid)
              .then(res => {
                // console.log(res.data.data)
                class CareerStats {
                  constructor ({ kills = 0, matchesplayed = 0, placetop12 = 0, placetop5 = 0, placetop1 = 0, placetop6 = 0, placetop3 = 0 }) {
                    this.kills = kills
                    this.matchesplayed = matchesplayed
                    this.placetop1 = placetop1
                    this.placetop3 = placetop3
                    this.placetop6 = placetop6
                    this.placetop12 = placetop12
                    this.placetop5 = placetop5
                  }
                }
                var duo
                var solo
                var squad
                var GPduo
                var GPsolo
                var GPsquad
                // Make Sure Everything is Defined
                if (typeof res.data.data.keyboardmouse.defaultduo === 'undefined') {
                  duo = new CareerStats(this.empty)
                } else {
                  duo = new CareerStats(res.data.data.keyboardmouse.defaultduo.default)
                }
                if (typeof res.data.data.keyboardmouse.defaultsolo === 'undefined') {
                  solo = new CareerStats(this.empty)
                } else {
                  solo = new CareerStats(res.data.data.keyboardmouse.defaultsolo.default)
                }
                if (typeof res.data.data.keyboardmouse.defaultsquad === 'undefined') {
                  squad = new CareerStats(this.empty)
                } else {
                  squad = new CareerStats(res.data.data.keyboardmouse.defaultsquad.default)
                }
                if (typeof res.data.data.gamepad.defaultduo === 'undefined') {
                  GPduo = new CareerStats(this.empty)
                } else {
                  GPduo = new CareerStats(res.data.data.gamepad.defaultduo.default)
                }
                if (typeof res.data.data.gamepad.defaultsolo === 'undefined') {
                  GPsolo = new CareerStats(this.empty)
                } else {
                  GPsolo = new CareerStats(res.data.data.gamepad.defaultsolo.default)
                }
                if (typeof res.data.data.gamepad.defaultsquad === 'undefined') {
                  GPsquad = new CareerStats(this.empty)
                } else {
                  GPsquad = new CareerStats(res.data.data.gamepad.defaultsquad.default)
                }
                // Carrer Stats
                this.TotalKills = duo.kills + solo.kills + squad.kills + GPduo.kills + GPsolo.kills + GPsquad.kills
                // console.log(solo.kills)
                this.TotalWins = duo.placetop1 + solo.placetop1 + squad.placetop1 + GPduo.placetop1 + GPsolo.placetop1 + GPsquad.placetop1
                this.matchesPlayed = duo.matchesplayed + solo.matchesplayed + squad.matchesplayed + GPduo.matchesplayed + GPsolo.matchesplayed + GPsquad.matchesplayed
                this.KBTotalKills = duo.kills + solo.kills + squad.kills
                this.KBTotalWins = duo.placetop1 + solo.placetop1 + squad.placetop1
                this.KBmatchesPlayed = duo.matchesplayed + solo.matchesplayed + squad.matchesplayed
                this.GPTotalKills = GPduo.kills + GPsolo.kills + GPsquad.kills
                this.GPTotalWins = GPduo.placetop1 + GPsolo.placetop1 + GPsquad.placetop1
                this.GPmatchesPlayed = GPduo.matchesplayed + GPsolo.matchesplayed + GPsquad.matchesplayed
              })
          })
      }
    }
  }
</script>
