export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      countries: {
        Row: {
          flag_url: string | null
          id: string
          keywords: string | null
          name: string | null
          old_id: string | null
        }
        Insert: {
          flag_url?: string | null
          id?: string
          keywords?: string | null
          name?: string | null
          old_id?: string | null
        }
        Update: {
          flag_url?: string | null
          id?: string
          keywords?: string | null
          name?: string | null
          old_id?: string | null
        }
        Relationships: []
      }
      favorite_countries: {
        Row: {
          country_id: string
          user_id: string
        }
        Insert: {
          country_id: string
          user_id: string
        }
        Update: {
          country_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorite_countries_country_id_fkey"
            columns: ["country_id"]
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorite_countries_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      favorite_items: {
        Row: {
          item_id: string
          user_id: string
        }
        Insert: {
          item_id: string
          user_id: string
        }
        Update: {
          item_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorite_items_item_id_fkey"
            columns: ["item_id"]
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "favorite_items_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      items: {
        Row: {
          id: string
          keywords: string | null
          logo_url: string | null
          min_price: number | null
          name: string | null
          priority: number | null
          slug: string | null
        }
        Insert: {
          id?: string
          keywords?: string | null
          logo_url?: string | null
          min_price?: number | null
          name?: string | null
          priority?: number | null
          slug?: string | null
        }
        Update: {
          id?: string
          keywords?: string | null
          logo_url?: string | null
          min_price?: number | null
          name?: string | null
          priority?: number | null
          slug?: string | null
        }
        Relationships: []
      }
      pairs: {
        Row: {
          country_id: string | null
          id: number
          item_id: string | null
          price: number | null
          priority: number | null
          quantity: number | null
        }
        Insert: {
          country_id?: string | null
          id?: number
          item_id?: string | null
          price?: number | null
          priority?: number | null
          quantity?: number | null
        }
        Update: {
          country_id?: string | null
          id?: number
          item_id?: string | null
          price?: number | null
          priority?: number | null
          quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "pairs_country_id_fkey"
            columns: ["country_id"]
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pairs_item_id_fkey"
            columns: ["item_id"]
            referencedRelation: "items"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
